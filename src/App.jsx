import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Create from "./pages/Create";
import GetSinglePost from "./pages/GetSinglePost";
import EditPost from "./pages/EditPost";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BlogForm from "./components/BlogForm";
import BlogDetail from "./components/BlogDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          }
        />
        <Route path="/post/:id" element={<BlogDetail />} />
        <Route path="/editpost/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
