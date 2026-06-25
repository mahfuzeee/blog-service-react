import { useGetAllBlogs } from "../apis/queries";

export const GetAllBlogs = () => {
  const { data, isLoading, isError, error } = useGetAllBlogs();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <div>
      {data["data"].map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};
