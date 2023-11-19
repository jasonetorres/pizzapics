import PostForm from '@/components/ui/forms/PostForm'
import Loader from '@/components/ui/shared/Loader';
import { useGetPostById } from '@/lib/react-query/queriesAndMutations';
import { useParams } from 'react-router-dom'

const EditPost = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostById(id);
  if (isLoading)
  return (
    <div className="flex-center w-full h-full">
      <Loader />
    </div>
  );

  return (
    <div className='flex flex-1'>
      <div className='common-container'>
        <div className='max-w-5xl flex-start gap-3 justify-start w-full'>
          <img src='/assets/icons/add-post.svg'
          width={36}
          height={36}
          alt='add-post'/>
          <h2 className='h3-bold md:h2-bold text-left w-full'>change your order</h2>
        </div>
        {isLoading ? <Loader /> : <PostForm action="Update" post={post} />}
      </div>
    </div>
  )
}

export default EditPost