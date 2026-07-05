import { Navigate, Link } from "react-router-dom";
import { EditBlog } from "./EditBlog";
import DeleteBlog from "./DeleteBlog";

function AdminPostCard({ blog }) {
  return (
    <div className="flex flex-col items-center p-2 mt-4 gap-3">
      <h1 className="text-lg font-bold ">{blog["title"]}</h1>
      <p className="p-2a">{blog["body"]}</p>
      <p>Author: {blog["author"]}</p>
      <div className="flex gap-2 px-4">
        <EditBlog id={blog._id} />
        <DeleteBlog id={blog._id} />
      </div>
    </div>
  );
}

export default AdminPostCard;
