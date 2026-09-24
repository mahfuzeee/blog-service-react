import { Link } from "react-router-dom";
import DeleteBlog from "./DeleteBlog";

function AdminPostCard({ blog }) {
  return (
    <div className="flex flex-col items-center p-2 mt-4 gap-3">
      <h1 className="text-lg font-bold ">{blog["title"]}</h1>
      <p className="p-2 w-[90%]">{blog["body"]}</p>
      <p>Author: {blog.author?.name ?? blog.author?.email ?? blog.author}</p>
      <div className="flex gap-2 px-4">
        <DeleteBlog id={blog._id} />
      </div>
    </div>
  );
}

export default AdminPostCard;
