import { useGetAllBlogs } from "../apis/queries";

export const GetAllBlogs = () => {
  const { data, isLoading, isError, error } = useGetAllBlogs();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <div>
      {data.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};
