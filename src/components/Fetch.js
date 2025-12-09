import { useState } from "react"
import useFetch from "../customHooks/useFetch"

const config = [
  {
    id: "posts",
    url: "https://jsonplaceholder.typicode.com/posts",
    name: "Posts",
  },
  {
    id: "users",
    url: "https://jsonplaceholder.typicode.com/users",
    name: "Users",
  },
];

function Fetch() {
  const [resourceId, setResourceId] = useState("");
  const target = config.find((c) => c.id === resourceId);
  const { fetchData, data, isLoading, isError } = useFetch(target?.url ?? "");

  return (
    <div>
      <h2>useFetch</h2>
      <span>Please choose URL you want to fetch</span>
      <Buttons config={config} setResourceId={setResourceId} />
      <p>
        You are going to fetch {target?.url || "URL"} by clicking on the button
        below
      </p>
      <button onClick={fetchData}>Fetch {target?.name}</button>
      {isError ? <Error /> : null}
      {isLoading ? <Loader /> : <ResourceList items={data} />}
    </div>
  );
}

const Buttons = ({ config, setResourceId }) => {
  return config.map((c) => (
    <button onClick={() => setResourceId(c.id)}>{c.name}</button>
  ));
};

const Loader = () => {
  return <p>Loading...</p>;
};

const Error = () => {
  return <p>Smth went wrong. Try again</p>;
};

const ResourceList = ({ items }) => {
  return (
    <ul>
      {items?.map((el) => (
        <li key={el.id}>{el.name || el.title}</li>
      ))}
    </ul>
  );
};

export default Fetch
