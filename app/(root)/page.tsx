//app/page.tsx
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchThreads } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default async function Home() {
   const user = await currentUser();
   if (!user) return null;
   
   const userInfo = await fetchUser(user.id);
   // console.log('THIS IS THE',userInfo)
   if (!userInfo?.onboarded) redirect("/onboarding");
   
   const result = await fetchThreads(1, 20);

   // console.log("This is the result:         ",result)
   


   return (
      <>
         <h1 className="head-text text-left">Homes</h1>

         <section className="mt-9 flex flex-col gap-10">
            {result.posts.length === 0 ? (
               <p className="no-result">No Threads found</p>
            ) : (
               <>
                  {result.posts.map((post) => (
                     <ThreadCard
                        key={post._id}
                        id={post._id}
                        currentUserId={user?.id || ''}
                        parentId={post.parentId}
                        content={post.text}
                        author={post.author}
                        community={post.community}
                        createdAt={post.createdAt}
                        comments={post.children}
                        likes={post.likes}
                     />
                  ))}
               </>
            )}
         </section>
      </>
   )
}