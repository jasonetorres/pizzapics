import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, 
FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../textarea"
import FileUploader from "../shared/FileUploader"
import { PostValidation } from "@/lib/validation"
import { Models } from "appwrite"
import { useUserContext } from "@/context/AuthContext"
import { useCreatePost } from "@/lib/react-query/queriesAndMutations"
import { useToast } from "../use-toast"
import { useNavigate } from "react-router-dom"

type PostFormProps = {
    post?: Models.Document;
    action: "Create" | "Update";
  };

const PostForm = ({ post }: PostFormProps) => {
    const { mutateAsync: createPost, isLoading: isLoadingCreate } =
    useCreatePost();
    const { user } = useUserContext();
    const { toast } = useToast();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof PostValidation>>({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            caption: post ? post?.caption : "",
            file: [],
            location: post ? post.location : "",
            tags: post ? post.tags.join(",") : "",
        },
      }) 

    async function onSubmit(values: z.infer<typeof PostValidation>){
        const newPost = await createPost({
            ...values,
            userId: user.id,
        });
        if (!newPost) {
            toast({
              title: `post failed. Please try again.`,
            });
          }
          navigate("/");
        }; 
    
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full maxx-w-5xl">
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Caption</FormLabel>
              <FormControl>
                <Textarea className="shad-textarea custom-scrollbar" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add that Pizza</FormLabel>
              <FormControl>
                <FileUploader
                fieldChange={field.onChange}
                mediaUrl={post?.imageUrl}
                 />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Location</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Add Tags (separated by comma " , ")
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Pepperoni, Detroit Style"
                  type="text"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <div className="flex gap-4 items-center justify-end">
          <Button
            type="button"
            className="shad-button_dark_4">
            Cancel
          </Button>
          <Button
            type="submit"
            className="shad-button_primary whitespace-nowrap">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default PostForm