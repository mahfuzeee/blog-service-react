import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useGetAllBlogs, useDeleteBlog, useGetComments } from "../apis/queries";

import { useAuth } from "../context/AuthContext";
import { formatDate, getInitials } from "../utils/helpers";
import { Spinner, ErrorMessage } from "../components/UI";
import CommentSection from "../components/CommentSection";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const { data: blog, isLoading: loading, isError: error } = useGetAllBlogs();

  const { data: comments } = useGetComments(id);

  const { deleteBlog } = useDeleteBlog();
  const handleDelete = async () => {
    if (!confirm("Delete this blog?")) return;
    try {
      await deleteBlog(id);
      navigate("/");
    } catch {
      alert("Failed to delete.");
    }
  };

  const authorName = blog?.author?.name || blog?.authorName || "Anonymous";
  const isOwner =
    user && blog && (user._id === blog.author?._id || user._id === blog.author);

  if (loading)
    return (
      <div className="mx-auto flex max-w-[680px] items-center justify-center px-6 py-12 pb-24">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="mx-auto max-w-[680px] px-6 py-12 pb-24 max-sm:px-4 max-sm:py-8 max-sm:pb-16">
        <ErrorMessage message={error} />
      </div>
    );

  return (
    <main className="mx-auto max-w-[720px] px-6 py-12 pb-24 max-sm:px-4 max-sm:py-8 max-sm:pb-16">
      <a
        href="/"
        className="mb-8 inline-block text-[0.88rem] text-muted hover:text-accent"
      >
        ← All Stories
      </a>

      <article>
        <header className="mb-9">
          <h1 className="mb-4 font-display text-[2.6rem] font-semibold leading-[1.2] max-sm:text-[1.9rem]">
            {blog.title}
          </h1>
          <div className="flex items-center gap-2.5 text-[0.88rem] text-muted">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ede8df] text-[0.7rem] font-semibold text-muted">
              {getInitials(authorName)}
            </span>
            <span>{authorName}</span>
            <span className="opacity-40">·</span>
            <span>{formatDate(blog.createdAt)}</span>
            {isOwner && (
              <>
                <span className="opacity-40">·</span>
                <a
                  href={`/blogs/${id}/edit`}
                  className="text-[0.85rem] text-muted hover:text-accent"
                >
                  Edit
                </a>
                <button
                  onClick={handleDelete}
                  className="border-0 bg-transparent p-0 font-body text-[0.85rem] text-muted hover:text-danger"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </header>

        <div className="text-[1.08rem] leading-[1.85] text-[#2c2a27] [&_p]:mb-[1.3em]">
          {blog.content
            ?.split("\n")
            .map((para, i) =>
              para.trim() ? <p key={i}>{para}</p> : <br key={i} />,
            )}
        </div>
      </article>

      <hr className="my-12 border-0 border-t border-line" />

      <CommentSection
        blogId={id}
        comments={comments}
        onRefresh={fetchComments}
      />
    </main>
  );
}
