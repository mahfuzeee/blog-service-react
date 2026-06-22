import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/v1/blogs");
      const data = await response.json();
      setBlogs(data.data);
      console.log(data);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {blogs.map((blog) => (
        <p key={blog._id}>{blog.title}</p>
      ))}
    </div>
  );
}

export default App;
