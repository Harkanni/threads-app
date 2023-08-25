"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose"


interface Params {
   userId: string, 
   username: string, 
   name: string, 
   bio: string, 
   image: string, 
   path: string
}


export async function updateUser({userId, username, name, bio, image, path}: Params): Promise<void> {
   await connectToDB();

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
      await connectToDB();

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