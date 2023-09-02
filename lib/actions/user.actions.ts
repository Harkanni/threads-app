"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose"
import Thread from "../models/thread.model";


interface Params {
   userId: string, 
   username: string, 
   name: string, 
   bio: string, 
   image: string, 
   path: string
}


export async function updateUser({userId, username, name, bio, image, path}: Params): Promise<void> {
   connectToDB();

   try {
      const dbresult = await User.findOneAndUpdate(
         { id: userId },
         { 
            username: username.toLowerCase(), 
            name: name.toLowerCase(), 
            bio, 
            image, 
            onboarded: true 
         },
         { upsert: true },
      );
   
      if(path === '/profile/edit') {
         revalidatePath(path)
      }

      console.log(dbresult)
   } catch (error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
   }
}

export const fetchUser = async (userId: string) => {
   try {
      connectToDB();

      return await User
         .findOne({id: userId})
         // .populate({
         //    path: 'communties',
         //    model: 'communty'
         // })
   } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
   }
}

export const fetchUserPost = async (userId: string) => {
   try {
      connectToDB()

      // FIND ALL THREAD AUTHORED BY USER WITH THE GIVEN ID
      
      // TODO: Populate community
      const threads = await User.findOne({ id: userId })
         .populate({ 
            path: 'threads',
            model: Thread,
            populate: {
               path: 'children',
               model: Thread,
               populate: {
                  path: 'author',
                  model: User,
                  select: 'name image id',
               }
            }
         })

         return threads
   } catch (error: any) {
      throw new Error(`Failed to fetch user posts: ${error.message}`);
   }
}