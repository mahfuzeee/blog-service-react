import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateBlog, useGetBlogById, useEditBlog } from "../apis/queries";
import { ErrorMessage } from "../components/UI";

export default function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [error, setError] = useState("");
  const { data, isLoading, isError, error: queryError } = useGetBlogById(id);
  const { mutateAsync: createBlog, isPending: isCreating } = useCreateBlog();
  const { mutateAsync: editBlog, isPending: isEditing } = useEditBlog();
  const submitting = isCreating || isEditing;

  const blog = data?.data || data?.blog || data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title").trim();
    const content = formData.get("content").trim();

    if (!title || !content) {
      setError("Title and content are required.");
      return;
    }
    setError("");
    try {
      if (isEdit) {
        await editBlog({ id, title, content });
        navigate(`/blogs/${id}`);
      } else {
        const res = await createBlog({ title, content });
        const createdBlog = res?.data || res?.blog || res;
        navigate(`/blogs/${createdBlog._id}`);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save blog.");
    }
  };

  if (isLoading)
    return (
      <div className="mx-auto flex max-w-[680px] items-center justify-center px-6 py-12 pb-24">
        Loading...
      </div>
    );

  if (isError)
    return (
      <main className="mx-auto max-w-[780px] px-6 py-12 pb-24 max-sm:px-4 max-sm:py-8 max-sm:pb-16">
        <ErrorMessage
          message={
            queryError?.response?.data?.message || "Failed to load blog."
          }
        />
      </main>
    );

  return (
    <main className="mx-auto max-w-[780px] px-6 py-12 pb-24 max-sm:px-4 max-sm:py-8 max-sm:pb-16">
      <div className="mb-8">
        <a
          href={isEdit ? `/blogs/${id}` : "/"}
          className="mb-8 inline-block text-[0.88rem] text-muted hover:text-accent"
        >
          ← Back
        </a>
        <h1 className="font-display text-[2rem] font-semibold">
          {isEdit ? "Edit Story" : "Write a Story"}
        </h1>
      </div>

      <ErrorMessage message={error} />

      <form onSubmit={handleSubmit} className="border-t border-line pt-6">
        <div className="mb-[18px]">
          <input
            type="text"
            placeholder="Story title…"
            name="title"
            defaultValue={blog?.title || ""}
            className="w-full border-0 border-b border-line bg-transparent px-0 py-2 font-display text-[1.6rem] outline-none focus:border-accent"
            maxLength={200}
          />
        </div>
        <div className="mb-[18px]">
          <textarea
            placeholder="Tell your story…"
            name="content"
            defaultValue={blog?.content || ""}
            className="min-h-[360px] w-full resize-y border-0 border-t border-line bg-transparent px-0 py-4 font-body text-[1.05rem] leading-[1.7] outline-none focus:border-transparent"
            rows={18}
          />
        </div>
        <div className="mt-2 flex justify-end gap-3">
          <a
            href={isEdit ? `/blogs/${id}` : "/"}
            className="inline-flex items-center justify-center rounded-[4px] border border-line bg-transparent px-5 py-2 font-body text-[0.9rem] text-muted hover:bg-[#f0ece4] hover:text-ink"
          >
            Cancel
          </a>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-[4px] border-0 bg-accent px-5 py-2 font-body text-[0.9rem] text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Saving…" : isEdit ? "Update" : "Publish"}
          </button>
        </div>
      </form>
    </main>
  );
}
