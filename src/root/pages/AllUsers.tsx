import { useToast } from '@/components/ui'
import Loader from '@/components/ui/shared/Loader';
import { useGetUsers } from '@/lib/react-query/queriesAndMutations';
import UserCard from '@/components/ui/shared/UserCard';

const AllUsers = () => {
  const { toast } = useToast();
  const { data: creators, isPending, isError:isErrorCreators } = useGetUsers()

  if(isErrorCreators) {
    toast({ title: "Ah something messed up."});
    return;
  }

  return(
    <div className='common-container'>
      <div className='user-container'>
        <h2 className='h3-bold md:h2-bold text-left w-full'>All Users</h2>
        {isPending && !creators ? (
          <Loader />
        ) : (
          <ul className='user-grid'>
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className='flex-1 min-w-[200px] w-full'>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;