import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ErrorMessage } from "../components/UI";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto flex max-w-[680px] justify-center px-6 pt-20 pb-24 max-sm:px-4 max-sm:pt-8 max-sm:pb-16">
      <div className="w-full max-w-[400px] rounded-lg border border-line bg-surface px-9 py-10 max-sm:px-5 max-sm:py-7">
        <h1 className="mb-1 font-display text-[1.8rem]">Welcome back</h1>
        <p className="mb-7 text-[0.9rem] text-muted">Sign in to your account</p>
        <ErrorMessage message={error} />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="mb-[18px]">
            <label className="mb-1.5 block text-[0.85rem] text-muted">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-[4px] border border-line bg-surface px-3.5 py-2.5 font-body text-base text-ink outline-none transition-colors focus:border-accent"
              required
              autoFocus
            />
          </div>
          <div className="mb-[18px]">
            <label className="mb-1.5 block text-[0.85rem] text-muted">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-[4px] border border-line bg-surface px-3.5 py-2.5 font-body text-base text-ink outline-none transition-colors focus:border-accent"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-[4px] border-0 bg-accent px-5 py-2 font-body text-[0.9rem] text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
        <p className="mt-5 text-center text-[0.88rem] text-muted">
          No account?{" "}
          <Link to="/register" className="text-accent">
            Join Inkwell
          </Link>
        </p>
      </div>
    </main>
  );
}
