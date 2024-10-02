import { useSearchParams } from 'react-router-dom'
import Results from './results'
import SearchBar from '../../shared/searchBar'

const SearchListPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('search') ?? ''

  return (
    <div className="w-full mt-5">
      <div className="flex justify-center border-b w-full border-purple-500 pb-10">
        <SearchBar defaultValue={query} />
      </div>
      <Results labelSearch={query} />
    </div>
  )
}

export default SearchListPage
