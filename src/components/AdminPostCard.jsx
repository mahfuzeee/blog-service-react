import { Link } from "react-router-dom";

function AdminPostCard({ blog }) {
  console.log(blog);
  return (
    <div className="flex flex-col items-center p-2 mt-4 gap-3">
      <h1 className="text-lg font-bold ">{blog["title"]}</h1>
      <p className="p-2a">{blog["body"]}</p>
      <p>Author: {blog["author"]}</p>
      <div className="flex gap-2 px-4">
        <Link to={`/edit/${blog._id}`} className="bg-blue-500 text-white p-2">
          Edit
        </Link>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default AdminPostCard;
