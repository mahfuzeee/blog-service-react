import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CreatePost from "./pages/CreatePost";
import GetSinglePost from "./pages/GetSinglePost";
import EditPost from "./pages/EditPost";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/getsinglepost" element={<GetSinglePost />} />
        <Route path="/editpost" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
