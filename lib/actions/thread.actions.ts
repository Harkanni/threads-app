'use server';

import { revalidatePath } from "next/cache"
import Thread from "../models/thread.model"
import User from "../models/user.model"
import { connectToDB } from "../mongoose"
import { skip } from "node:test";

interface Params {
   text: string,
   author: string,
   communityId: string | null,
   path: string,  
}

// I defined this
interface Params2 {
   threadId: string,
   commentText: string,
   userId: string,
   path: string,
}

export async function createThread({ text, author, communityId, path }: Params) {
   try {
      connectToDB()

      const createdThread = await Thread.create({ text, author, community: null, })


      // update the user model
      await User.findByIdAndUpdate(author, {
         $push: { threads: createdThread._id }
      })

      revalidatePath(path)
   } catch (error: any) {
      throw new Error(`Error creating thread: ${error.message}`)
   }
}

export async function fetchThreads(pageNumber = 1, pageSize = 30) {
   connectToDB()

   const skipAmount = (pageNumber - 1) * pageSize

   // fetch the thread that have no parent (i.e top-level threads.....)
   const postQuery = Thread.find({ parentId: { $in: [null, undefined] } })
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(skipAmount)
      .populate({ path: 'author', model: User })
      .populate({
         path: 'children', populate: {
            path: 'author',
            model: User,
            select: "_id name parentId image"
         }
      });

   const totalPostsCount = await Thread.countDocuments({ parentId: { $in: [null, undefined] } })

   const posts = await postQuery.exec();

   const isNext = totalPostsCount > skipAmount + posts.length;

   return { posts, isNext };
}

export async function fetchThreadsById(id: string) {
   connectToDB();

   // TODO: POPULATE COMMUNITY
   try {
      const thread = await Thread.findById(id)
         .populate({
            path: 'author',
            model: User,
            select: "_id id name image"
         })
         .populate({
            path: 'children',
            populate: [
               {
                  path: 'author',
                  model: User,
                  select: "_id id name parentId image"
               },
               {
                  path: 'children',
                  model: Thread,
                  populate: {
                     path: 'author',
                     model: User,
                     select: "_id id name parentId image"
                  }
               }
            ]
         }).exec();

      return thread;
   } catch (error: any) {
      throw new Error(`Error fetching thread: ${error.message}`);
   }
}

export async function addCommentToThread({threadId, commentText, userId, path}: Params2) {
   connectToDB();

   try {
      // FIND THE ORIGINAL THREAD BY IT'S ID
      const originalThread = await Thread.findById(threadId);

      if (!originalThread) {
         throw new Error("Thread not found");
      }

      // CREATE A NEW THREAD WITH THE COMMENT TEXT
      const commentThread = new Thread({
         text: commentText,
         author: userId,
         parentId: threadId,
      })

      // Save the new thread to the database
      const savedComentThread = await commentThread.save();

      // update the orignal thread to include the comment
      originalThread.children.push(savedComentThread._id);

      // save the original thread
      await originalThread.save();

      revalidatePath(path);

   } catch (error: any) {
      throw new Error(`Error adding comment to thread: ${error.message}`)
   }
}