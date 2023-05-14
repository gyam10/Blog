import "./App.css";
import Post from "./components/Post/post";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Post />} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />
      </Route>
    </Routes>
  );
}

export default App;
