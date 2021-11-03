import { useState } from "react"
import useFetch from "../customHooks/useFetch"

function Fetch() {
  const [url, setURL] = useState('')
  const [fetchData, data] = useFetch(url)

  return (
    <div>
      <h2>useFetch</h2>
      <span>Please choose URL you want to fetch</span>
      <button onClick={() => setURL('https://jsonplaceholder.typicode.com/posts')}>Post</button>
      <button onClick={() => setURL('https://jsonplaceholder.typicode.com/users')}>Users</button>
      <p>You are going to fetch {url || 'URL'} by clicking on the button below</p>
      <button onClick={fetchData}>Fetch {url.split('/')[3]}</button>
      <ul>
        {data?.map(el => (
          <li key={el.id}>{el.name || el.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Fetch
