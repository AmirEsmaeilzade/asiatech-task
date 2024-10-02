import SearchBar from '../../shared/searchBar'

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex mt-20 justify-center">
      <div>
        <p className="text-center mb-2">Search whatever you want</p>
        <SearchBar />
      </div>
    </div>
  )
}

export default HomePage
