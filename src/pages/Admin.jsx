import { Link } from "react-router-dom";

import { GetAdminBlogs } from "../components/GetAdminBlogs";
function Admin() {
  return (
    <div>
      <h1 className="text-lg font-bold text-center bg-gray-100 p-2">
        Admin Page
      </h1>
      <Link to="/create" className="bg-blue-500 text-white p-2 m-4">
        Create Post
      </Link>
      <div>
        <GetAdminBlogs />
      </div>
    </div>
  );
}

export default Admin;
