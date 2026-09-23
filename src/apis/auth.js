import client from "./client";

export const register = (data) => client.post("/user/register", data);
export const login = (data) => client.post("/user/login", data);
export const logout = () => client.post("/user/logout");
export const getMe = () => client.get("/user/me");
