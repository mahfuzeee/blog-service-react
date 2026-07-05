import { useEditBlog } from "../apis/queries";

export const EditBlog = ({ id }) => {
  const { mutate } = useEditBlog();
  return (
    <button className="btn btn-primary" onClick={() => mutate(id)}>
      Edit
    </button>
  );
};
