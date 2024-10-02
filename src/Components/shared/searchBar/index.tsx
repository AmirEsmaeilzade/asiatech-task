import { useDebounce } from '../../../hooks'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SuggestionsBar from './SuggestionsBar'
import { Get } from '../../../utils/api'
import { SuggestionType } from '../../../utils/types'

interface OptionalMiddleName {
  defaultValue?: string
}

const SearchBar = ({ defaultValue }: OptionalMiddleName) => {
  const [query, setQuery] = useState<string>(defaultValue || '')
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([])
  const [isInputFocus, setIsInputFocus] = useState(false)
  const debouncedQuery = useDebounce(query, 300)
  const navigate = useNavigate()

  const getData = async (searchItem: string) => {
    if (searchItem) {
      try {
        const { RelatedTopics } = await Get(
          `/?callback=&format=json&no_html=&no_redirect=&skip_disambig=&q=${searchItem}`
        )
        const filteredSuggestions = RelatedTopics.slice(0, 7).filter(
          (item: SuggestionType) => item.Text
        )
        setSuggestions(filteredSuggestions)
      } catch (error) {
        console.error('Error fetching data:', error)
        setSuggestions([])
      }
    } else {
      setSuggestions([])
    }
  }

  useEffect(() => {
    if (debouncedQuery) {
      getData(debouncedQuery)
    } else {
      setSuggestions([])
    }
  }, [debouncedQuery])

  useEffect(() => {
    if (defaultValue) {
      setQuery(defaultValue)
    }
  }, [defaultValue])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/results?search=${encodeURIComponent(query)}`)
      setSuggestions([])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="justify-center w-[300px] md:w-[400px] lg:w-[700px] pr-[65px] border-2 border-purple-500 rounded-xl h-10 bg-gray-100 focus:border-purple-700 focus:outline-none transition p-2 mx-auto"
        value={query}
        onChange={handleSearch}
        onFocus={() => setIsInputFocus(true)}
        onBlur={() => setIsInputFocus(false)}
      />
      <div className="relative right-1 bottom-9 h-0">
        <button
          type="submit"
          className="p-1 ml-auto block items-center bg-purple-500 text-white rounded-lg h-8 font-normal transition hover:bg-purple-600">
          Search
        </button>
      </div>
      <SuggestionsBar
        isInputFocus={isInputFocus}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />
    </form>
  )
}

export default SearchBar
