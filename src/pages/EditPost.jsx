import EditBlog from "../components/EditBlog";
import { useParams } from "react-router-dom";
function EditPost() {
  const id = useParams().id;
  console.log(`Edit post sending id: ${id}`);

  return (
    <div>
      <EditBlog id={id} />
    </div>
  );
}

export default EditPost;
