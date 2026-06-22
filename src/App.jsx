import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      fetch("http://localhost:3000/api/v1/blogs").then((res) => res.json()),
  });
  console.log(data);
  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data["data"].map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
