import { useParams } from "react-router-dom";
import GetPostById from "../components/GetPostById";
const GetSinglePost = () => {
  const { id } = useParams();
  return (
    <div>
      <GetPostById id={id} />
    </div>
  );
};

export default GetSinglePost;
