import { useNavigate } from 'react-router-dom'
import { SuggestionType } from '../../../utils/types'
import { normalSearchParam } from '../../../utils/helpers'

interface OptionalMiddleName {
  suggestions: SuggestionType[]
  setSuggestions: (value: SuggestionType[]) => void
  isInputFocus: boolean
}

const SuggestionsBar = ({ suggestions, setSuggestions, isInputFocus }: OptionalMiddleName) => {
  const navigate = useNavigate()

  const handleSuggestionClick = (FirstURL: string) => {
    navigate(`/results?search=${normalSearchParam(FirstURL)}`)
    setSuggestions([])
  }

  return (
    <>
      {suggestions.length !== 0 && isInputFocus && (
        <div className="justify-center absolute mt-4 w-[300px] md:w-[400px] lg:w-[700px] border-2 rounded-xl h-fit max-h-80 bg-gray-100 border-purple-700 mx-auto p-1 cursor-pointer">
          {suggestions.map((item) => (
            <p
              key={item.FirstURL}
              onMouseDown={() => handleSuggestionClick(item.FirstURL)}
              className="mb-2 last:mb-0 hover:bg-gray-200 p-1 rounded-lg text-ellipsis whitespace-nowrap w-full overflow-hidden">
              {item?.Text}
            </p>
          ))}
        </div>
      )}
    </>
  )
}

export default SuggestionsBar
