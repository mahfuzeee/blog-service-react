import { useGetAllBlogs, useDeleteBlog } from "../apis/queries";
import { useAuth } from "../context/AuthContext";
import { Spinner, ErrorMessage, EmptyState, BlogCard } from "../components/UI";

export const GetAllBlogs = () => {
  const { user } = useAuth();
  const { data, isLoading, isError, error } = useGetAllBlogs();
  const { deleteBlog } = useDeleteBlog();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  const allBlogs = Array.isArray(data) ? data : [];

  const handleDelete = async (id) => {
    if (!confirm("Delete this blog?")) return;
    try {
      await deleteBlog(id);
    } catch {
      alert("Failed to delete blog.");
    }
  };

  return (
    <main className="mx-auto max-w-[680px] px-6 py-12 pb-24 max-sm:px-4 max-sm:py-8 max-sm:pb-16">
      <div className="mb-10 flex items-baseline justify-between">
        <h1 className="font-display text-[2rem] font-semibold">
          Latest Stories
        </h1>
        {user && (
          <a
            href="/new"
            className="inline-flex items-center justify-center rounded-[4px] bg-accent px-5 py-2 font-body text-[0.9rem] text-white transition-colors hover:bg-accent-hover"
          >
            + Write
          </a>
        )}
      </div>

      <ErrorMessage message={error} />

      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : allBlogs.length === 0 ? (
        <EmptyState
          icon="📝"
          title="No blogs yet"
          description="Be the first to share your story."
        />
      ) : (
        <div className="flex flex-col">
          {allBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              isOwner={
                user &&
                (user._id === blog.author?._id || user._id === blog.author)
              }
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </main>
  );
};
