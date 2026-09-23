import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Create from "./pages/Create";
import GetSinglePost from "./pages/GetSinglePost";
import EditPost from "./pages/EditPost";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:id" element={<GetSinglePost />} />
        <Route path="/editpost/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
