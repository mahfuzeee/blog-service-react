import { useDeleteBlog } from "../apis/queries";
import { useNavigate } from "react-router-dom";

const DeleteBlog = ({ id }) => {
  const { mutate: deleteBlog } = useDeleteBlog();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          deleteBlog(id);
          navigate(0);
        }}
        className="btn btn-primary"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteBlog;
