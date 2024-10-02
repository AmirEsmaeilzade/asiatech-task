import { Get } from '../../../../utils/api'
import { useInfiniteScroll } from '../../../../hooks'

interface OptionalMiddleName {
  labelSearch?: string
}

const Results = ({ labelSearch }: OptionalMiddleName) => {
  const getData = async (page: number, itemsPerPage: number) => {
    if (labelSearch) {
      const data = await Get(
        `/?callback=&format=json&no_html=&no_redirect=&skip_disambig=&q=${labelSearch}`
      )
      return data?.RelatedTopics.slice((page - 1) * itemsPerPage, page * itemsPerPage) || []
    }
    return []
  }

  const { items: results, loading } = useInfiniteScroll(getData, 8, labelSearch as string)

  const renderResults = () => {
    if (loading) {
      return <p className="text-center text-xl font-bold">Loading...</p>
    }

    if (results.length === 0) {
      return <p className="text-center text-xl font-bold">No results found</p>
    }

    return (
      <div>
        {results.map((item) => (
          <div key={item.FirstURL} className="mb-4 last:mb-0">
            <a
              href={item.FirstURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline">
              {item.FirstURL}
            </a>
            <p className="font-medium text-sm">{item.Text}</p>
          </div>
        ))}
      </div>
    )
  }

  return <div className="p-5">{renderResults()}</div>
}

export default Results
