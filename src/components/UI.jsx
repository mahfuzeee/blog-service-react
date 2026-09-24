export function Spinner({ size = "md" }) {
  return (
    <div
      className={`${size === "sm" ? "h-[18px] w-[18px]" : "h-8 w-8"} animate-spin rounded-full border-2 border-line border-t-accent`}
      aria-label="Loading"
    />
  );
}

export function ErrorMessage({ message }) {
  if (!message) return null;
  return (
    <div
      className="mb-5 rounded-[4px] border border-[#f5c6c6] bg-[#fdf2f2] px-4 py-2.5 text-[0.9rem] text-danger"
      role="alert"
    >
      ⚠ {message}
    </div>
  );
}

export function EmptyState({ icon = "📭", title, description }) {
  return (
    <div className="py-16 text-center text-muted">
      <span className="mb-3 block text-[2.5rem]">{icon}</span>
      <h3 className="mb-1.5 font-display text-[1.2rem] text-ink">{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}

export function BlogCard({ blog, onDelete, isOwner }) {
  const authorName = blog.author?.name || "Anonymous";
  const date = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";
  const excerpt =
    blog.content?.slice(0, 140) + (blog.content?.length > 140 ? "…" : "");

  return (
    <article className="border-b border-line py-7 last:border-b-0">
      <div className="mb-2.5 flex items-center gap-2 text-[0.82rem] text-muted">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ede8df] text-[0.7rem] font-semibold text-muted">
          {authorName[0]?.toUpperCase()}
        </span>
        <span>{authorName}</span>
        {date && <span className="opacity-40">·</span>}
        <span>{date}</span>
      </div>
      <a
        href={`/blogs/${blog._id}`}
        className="mb-2 block font-display text-[1.35rem] font-semibold leading-[1.3] text-ink transition-colors hover:text-accent"
      >
        {blog.title}
      </a>
      <p className="text-[0.95rem] leading-[1.6] text-muted">{excerpt}</p>
      {isOwner && (
        <div className="mt-3 flex gap-4">
          <a
            href={`/blogs/${blog._id}/edit`}
            className="bg-transparent p-0 text-[0.85rem] text-muted transition-colors hover:text-accent"
          >
            Edit
          </a>
          <button
            onClick={() => onDelete(blog._id)}
            className="bg-transparent p-0 text-[0.85rem] text-muted transition-colors hover:text-danger"
          >
            Delete
          </button>
        </div>
      )}
    </article>
  );
}
