import { useState } from "react";

import FormPosts from "./components/Posts/FormPosts";
import PostsList from "./components/Posts/PostsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import UpdatePost from "./components/Posts/UpdatePost";
import PostDetails from "./components/Posts/PostDetails";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <PublicNavbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<FormPosts />} path="/create-post" />
        <Route element={<PostsList />} path="/list" />
        <Route element={<UpdatePost />} path="/posts/:postId" />
        <Route element={<PostDetails />} path="/postDetails/:postId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
