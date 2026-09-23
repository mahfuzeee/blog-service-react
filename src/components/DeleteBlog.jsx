import { useDeleteBlog } from "../apis/queries";
import { useNavigate } from "react-router-dom";

const DeleteBlog = ({ id }) => {
  const { mutate: deleteBlog } = useDeleteBlog();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          window.confirm("Are you sure you want to delete this post?");
          deleteBlog(id);
          navigate(0);
        }}
        className="rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteBlog;
