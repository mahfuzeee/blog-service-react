import { Navigate, Link } from "react-router-dom";
import EditBlog from "./EditBlog";
import DeleteBlog from "./DeleteBlog";

function AdminPostCard({ blog }) {
  return (
    <div className="flex flex-col items-center p-2 mt-4 gap-3">
      <h1 className="text-lg font-bold ">{blog["title"]}</h1>
      <p className="p-2 w-[90%]">{blog["body"]}</p>
      <p>Author: {blog["author"]}</p>
      <div className="flex gap-2 px-4">
        <Link
          to={"/editpost/" + blog?._id}
          state={"edit"}
          className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Edit
        </Link>
        <DeleteBlog id={blog._id} />
      </div>
    </div>
  );
}

export default AdminPostCard;
