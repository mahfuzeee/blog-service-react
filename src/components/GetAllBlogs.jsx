import { useGetAllBlogs } from "../apis/queries";

export const GetAllBlogs = () => {
  const { data, isLoading, isError, error } = useGetAllBlogs();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  const allBlogs = Array.isArray(data) ? data : [];
  return (
    <div>
      {allBlogs.map((blog) => (
        <div key={blog._id}>
          <h2 className="text-lg font-bold text-center p-2">{blog.title}</h2>
          <p className="pb-2 px-4">{blog.body}</p>
          <p className="pb-2 px-4">
            Author: {blog.author?.name ?? blog.author?.email ?? blog.author}
          </p>
        </div>
      ))}
    </div>
  );
};
