import { createContext, useState, useEffect, useContext } from "react";
import {
  getMe,
  login as apiLogin,
  logout as apiLogout,
  register as apiRegister,
} from "../apis/auth";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(() =>
    Boolean(localStorage.getItem("token")),
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getMe()
        .then((res) => setUser(res.data.user))
        .catch(() => localStorage.removeItem("token"))
        .finally(() => setLoading(false));
    }
  }, []);

  const login = async (credentials) => {
    const res = await apiLogin(credentials);
    const { token, user: userData, data } = res.data;
    const resolvedUser = userData || data?.user || data;
    const resolvedToken = token || data?.token;
    localStorage.setItem("token", resolvedToken);
    setUser(resolvedUser);
    return resolvedUser;
  };

  const register = async (credentials) => {
    const res = await apiRegister(credentials);
    const { token, user: userData, data } = res.data;
    const resolvedUser = userData || data?.user || data;
    const resolvedToken = token || data?.token;
    if (resolvedToken) {
      localStorage.setItem("token", resolvedToken);
      setUser(resolvedUser);
    }
    return resolvedUser;
  };

  const logout = async () => {
    await apiLogout().catch(() => {});
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
