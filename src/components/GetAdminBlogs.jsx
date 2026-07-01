import { useGetAllBlogs } from "../apis/queries";
import AdminPostCard from "./AdminPostCard";

export const GetAdminBlogs = () => {
  const { data, isLoading, isError, error } = useGetAllBlogs();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      {data?.map((blog) => (
        <AdminPostCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};
