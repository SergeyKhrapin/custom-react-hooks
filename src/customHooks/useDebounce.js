import {useState} from "react"

const useDebounce = (fetchCountries, delay) => {
  console.log('test branch - commit 1');
  console.log('test branch - commit 3');

  const [suggestions, setSuggestions] = useState([])
  
  let timerId

  const func = (value) => {
    clearTimeout(timerId)

    timerId = setTimeout(async () => {
      if (value) {
        const response = await fetchCountries(value)
        const countries = await response.json()
        setSuggestions(countries)
      } else {
        console.log('12345');
        setSuggestions([])
      }
    }, delay)
  }

  return [func, suggestions]
}

export default useDebounce
