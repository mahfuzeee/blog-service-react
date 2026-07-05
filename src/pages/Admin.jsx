import { Link } from "react-router-dom";

import { GetAdminBlogs } from "../components/GetAdminBlogs";
function Admin() {
  return (
    <div>
      <h1 className="text-lg font-bold text-center mt-4 text-black bg-gray-100 p-2">
        Admin Page
      </h1>
      <div className="flex justify-center">
        <Link
          to="/create"
          className="bg-blue-500 text-white p-2 m-4 text-center flex justify-center w-40 rounded"
        >
          Create Post
        </Link>
      </div>
      <div>
        <GetAdminBlogs />
      </div>
    </div>
  );
}

export default Admin;
