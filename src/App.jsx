import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Create from "./pages/Create";
import GetSinglePost from "./pages/GetSinglePost";
import EditPost from "./pages/EditPost";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:id" element={<GetSinglePost />} />
        <Route path="/editpost" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
