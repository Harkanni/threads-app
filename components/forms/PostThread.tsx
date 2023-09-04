"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname, useRouter } from "next/navigation";

import { ThreadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.actions";
// import { updateUser } from "@/lib/actions/user.actions";

interface Props {
   userId: string;
 }



const PostThread = ({ userId }: Props) => {
   const router = useRouter()
   const pathName = usePathname()


   const form = useForm<z.infer<typeof ThreadValidation>>({
      resolver: zodResolver(ThreadValidation),
      defaultValues: {
         thread: '',
         accountId: userId,
      }
   })


   const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
      await createThread({
        text: values.thread,
        author: userId,
        communityId:  null,
        path: pathName,
      });
  
      router.push("/");
    };



   return (
      // <h1>Hello wordl</h1>
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}
            className="mt-10 flex flex-col justify-start gap-10">

            <FormField
               control={form.control}
               name="thread"
               render={({ field }) => (
                  <FormItem className="flex flex-col gap-3 w-full">
                     <FormLabel className="text-base-semibold text-light-2">
                        Content
                     </FormLabel>
                     <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-3">
                        <Textarea
                           rows={10}
                           className="account-form_input no-focus"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button type="submit" className="bg-primary-500">
               Post Thread
            </Button>
         </form>
      </Form>

   )
}

export default PostThread