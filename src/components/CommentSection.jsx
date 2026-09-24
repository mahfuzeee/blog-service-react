import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createComment } from "../apis/comments";
import { formatRelative, getInitials } from "../utils/helpers";

function CommentNode({ comment, blogId, onReply, depth = 0 }) {
  const [replying, setReplying] = useState(false);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { user } = useAuth();

  const authorName = comment.user?.name || comment.author?.name || "Anonymous";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setSubmitting(true);
    try {
      await onReply({ blogId, comment: text, parentComment: comment._id });
      setText("");
      setReplying(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`border-b border-line py-[18px] last:border-b-0 ${depth > 0 ? "mt-3 border-b-0 border-l-2 pl-5" : ""}`}
    >
      <div className="mb-1.5 flex items-center gap-2">
        <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#ede8df] text-[0.72rem] font-semibold text-muted">
          {getInitials(authorName)}
        </span>
        <span className="text-[0.88rem] font-medium">{authorName}</span>
        <span className="text-[0.78rem] text-muted">
          {formatRelative(comment.createdAt)}
        </span>
      </div>
      <p className="mb-1.5 text-[0.95rem] leading-[1.65] text-[#2c2a27]">
        {comment.comment}
      </p>
      {user && depth < 3 && (
        <button
          className="cursor-pointer border-0 bg-transparent p-0 font-body text-[0.78rem] text-muted hover:text-accent"
          onClick={() => setReplying((r) => !r)}
        >
          {replying ? "Cancel" : "Reply"}
        </button>
      )}
      {replying && (
        <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-2.5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a reply…"
            rows={2}
            className="w-full resize-y rounded-[4px] border border-line bg-surface px-3.5 py-2.5 font-body text-[0.95rem] outline-none focus:border-accent"
          />
          <button
            type="submit"
            disabled={submitting || !text.trim()}
            className="inline-flex items-center justify-center rounded-[4px] border-0 bg-accent px-3.5 py-1.5 font-body text-[0.83rem] text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Posting…" : "Post"}
          </button>
        </form>
      )}
      {comment.replies?.length > 0 && (
        <div className="mt-1">
          {comment.replies.map((r) => (
            <CommentNode
              key={r._id}
              comment={r}
              blogId={blogId}
              onReply={onReply}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentSection({ blogId, comments, onRefresh }) {
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleTopLevel = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setSubmitting(true);
    try {
      await createComment({ blogId, comment: text });
      setText("");
      onRefresh();
    } finally {
      setSubmitting(false);
    }
  };

  const handleReply = async (data) => {
    await createComment(data);
    onRefresh();
  };

  return (
    <section>
      <h3 className="mb-6 font-display text-[1.2rem]">
        {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
      </h3>

      {user ? (
        <form onSubmit={handleTopLevel} className="mb-8 flex flex-col gap-2.5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your thoughts…"
            rows={3}
            className="w-full resize-y rounded-[4px] border border-line bg-surface px-3.5 py-2.5 font-body text-[0.95rem] outline-none focus:border-accent"
          />
          <button
            type="submit"
            disabled={submitting || !text.trim()}
            className="inline-flex items-center justify-center rounded-[4px] border-0 bg-accent px-5 py-2 font-body text-[0.9rem] text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Posting…" : "Post comment"}
          </button>
        </form>
      ) : (
        <p className="mb-6 text-[0.92rem] text-muted">
          <a href="/login" className="text-accent">
            Sign in
          </a>{" "}
          to join the discussion.
        </p>
      )}

      <div className="flex flex-col">
        {comments.length === 0 && (
          <p className="text-[0.92rem] italic text-muted">
            No comments yet. Be the first!
          </p>
        )}
        {comments.map((c) => (
          <CommentNode
            key={c._id}
            comment={c}
            blogId={blogId}
            onReply={handleReply}
          />
        ))}
      </div>
    </section>
  );
}
