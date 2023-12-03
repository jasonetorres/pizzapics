import { SearchResultProps } from '@/root/pages/Explore'
import { Models } from 'appwrite';
import GridPostList from './GridPostList';
import Loader from './Loader';

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts } : SearchResultProps) => {
  if(isSearchFetching) return <Loader />

  if(searchedPosts && searchedPosts.documents.length > 0){
    return (
      <GridPostList posts={searchedPosts.documents} />
    )
  }
  return (
    <p className='text-light-4 mt-10 text-center w-full'>Uh oh nothing here</p>
  )
}

export default SearchResults