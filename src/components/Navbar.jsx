import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getInitials } from "../utils/helpers";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-surface">
      <div className="mx-auto flex h-[58px] max-w-[860px] items-center justify-between px-6 max-sm:px-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-[1.2rem] font-semibold text-ink"
        >
          <span className="text-base text-accent">✦</span>
          <span>Inkwell</span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            to="/"
            className="rounded-[4px] px-3.5 py-1.5 text-[0.9rem] text-muted transition-colors hover:text-ink"
          >
            Blogs
          </Link>
          {user ? (
            <>
              <Link
                to="/create"
                className="rounded-[4px] bg-accent px-3.5 py-1.5 text-[0.85rem] tracking-[0.02em] text-white transition-colors hover:bg-accent-hover"
              >
                Write
              </Link>
              <div className="group relative flex items-center">
                <div className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-accent font-body text-[0.8rem] font-semibold text-white">
                  {getInitials(user.name)}
                </div>
                <div className="absolute right-0 top-full hidden min-w-40 flex-col gap-1 rounded-[4px] border border-line bg-surface p-2 shadow-[0_4px_16px_rgba(0,0,0,0.08)] group-hover:flex">
                  <span className="px-2 py-1 text-[0.85rem] text-muted">
                    {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="cursor-pointer rounded-[4px] border-0 bg-transparent px-2 py-1.5 text-left font-body text-[0.9rem] text-danger hover:bg-[#fdf2f2]"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-[4px] px-3.5 py-1.5 text-[0.9rem] text-muted transition-colors hover:text-ink"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="rounded-[4px] bg-accent px-3.5 py-1.5 text-[0.85rem] tracking-[0.02em] text-white transition-colors hover:bg-accent-hover"
              >
                Join
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
