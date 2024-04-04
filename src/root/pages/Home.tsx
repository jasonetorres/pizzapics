import Loader from "@/components/ui/shared/Loader"
import PostCard from "@/components/ui/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
const Home = () => {
  const { data: posts, isPending: isPostLoading, isError: isErrorPosts } = useGetRecentPosts();

  if (isErrorPosts){
    return (
      <div className="flex flex-1 justify-center items-center">
        <p className="text-red-500">Error fetching recent posts.</p>
      </div>
    );
  }
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">
            Home Feed
          </h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents && posts.documents.map((post: Models.Document) => (
              <PostCard key={post.id} post={post} />
              ))}
            </ul>
          )}  
        </div>
      </div>
    </div>
  )
}

export default Home