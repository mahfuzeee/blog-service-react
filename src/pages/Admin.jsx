import { Link } from "react-router-dom";
import { GetAllBlogs } from "../components/GetAllBlogs";
function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>
      <Link to="/create">Create Post</Link>
      <div>
        <GetAllBlogs />
      </div>
    </div>
  );
}

export default Admin;
