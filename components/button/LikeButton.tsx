"use client"

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { Button } from "../ui/button";
import { useState } from "react";
import { likeThread } from "@/lib/actions/thread.actions";
import { usePathname } from "next/navigation";


const LikeButton = ({ userId, likes }: any) => {
   const pathname = usePathname()

   console.log("This is the likes Array: ", likes);
   const [liked, setLiked] = useState(likes.length > 0);

   const handleLike = async () => {
      setLiked(!liked);
      console.log("liked: ", liked); 

      await likeThread(userId, pathname);
   }

   return (
      <div>
         <button className="align-[-.4rem]" onClick={() => handleLike()}>
            {liked
               ? <AiFillHeart color="#b91c1c" size="23px" className={`cursor-pointe`} />
               : <AiOutlineHeart color="#52536e" size="23px" className={`cursor-pointer`} />
            }
         </button>
      </div>
   )
}

export default LikeButton
