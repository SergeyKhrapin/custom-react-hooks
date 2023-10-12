import {useCallback, useEffect, useState} from "react"
import useDebounce from "../customHooks/useDebounce"

class Shape {
  constructor() {}
  calculateSquare() {

  }
}

class Circle extends Shape {
  constructor(radius) {
    // console.log("constructor");
    super();
    this.radius = radius;
  }

  static _ = (() => {
    // console.log("static block");
  })()

  diameter = this.radius * 2;

  calculateSquare() {
    // console.log('this', this);
    return 2 * 3.14 * this.radius;
  }
}

const circle = new Circle(10);
// console.log("circle", circle instanceof Shape);
// console.log("calculateSquare", circle.calculateSquare());

const Country = () => {
  const [country, setCountry] = useState("")

  const [debounce, countries] = useDebounce(async (value) => {
    return await fetch(`https://restcountries.com/v2/name/${value}`)
  }, 500)

  const fetchSuggestions = useCallback((val) => debounce(val), [debounce])

  useEffect(() => {
    fetchSuggestions(country)
  }, [country])

  const handleChange = (e) => setCountry(e.target.value)

  return (
    <>
      <h2>useDebounce</h2>
      <form>
        <input onChange={handleChange} placeholder="Search country" />
        <ul id="suggestions">
          {countries?.map(country => (
            <li key={country.alpha2Code}>{country.name}</li>
          ))}
        </ul>
      </form>
    </>
  )
}

export default Country

// aaa
// bbb