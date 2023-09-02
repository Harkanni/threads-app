import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";

import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { profileTabs } from "@/constants";
import ThreadsTab from "@/components/shared/ThreadsTab";
import UserCard from "@/components/cards/UserCard";

async function Page() {
  const user = await currentUser();  
  if (!user) return null;

  // fetch organization list created by user
  const userInfo = await fetchUser(user.id);  
  if (!userInfo?.onboarded) redirect("/onboarding");

  // FETCH USERS
   const result = await fetchUsers({ 
      userId: user.id,
      searchString: '',
      pageNumber: 1,
      pageSize: 25,
   })


  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>

      {/* SEARCH BAR  */}
      <div className="mt-14 flex flex-col gap-9">
         {result.users.length === 0 ? (
            <p className="no-result"> No users</p>
         ) : (
            <>
               { result.users.map(user => (
                  <UserCard 
                     key={user.id}
                     id={user.id}
                     name={user.name}
                     username={user.username}
                     imgUrl={user.image}
                     personType="user"                  
                  />
               ))}
            </>
         )}
      </div>
    </section>
  )
}

export default Page;
