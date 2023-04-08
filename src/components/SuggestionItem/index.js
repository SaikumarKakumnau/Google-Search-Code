// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchDetails, updateSearchInput} = props
  const {suggestion} = searchDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="text">{suggestion}</p>
      <button type="button" className="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
