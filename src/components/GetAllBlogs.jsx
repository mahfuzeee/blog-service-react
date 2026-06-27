import { useGetAllBlogs } from "../apis/queries";

export const GetAllBlogs = () => {
  const { data, isLoading, isError, error } = useGetAllBlogs();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <div>
      {data.map((blog) => (
        <div key={blog._id}>
          <h2 className="text-lg font-bold text-center p-2">{blog.title}</h2>
          <p className="pb-2 px-4">{blog.body}</p>
          <p className="pb-2 px-4">Author: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};
