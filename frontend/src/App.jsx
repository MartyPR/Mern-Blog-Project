import { useState } from "react";

import FormPosts from "./components/Posts/FormPosts";
import PostsList from "./components/Posts/PostsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import UpdatePost from "./components/Posts/UpdatePost";

function App() {
  const [count, setCount] = useState(0);

  return (
    
      <BrowserRouter>
      <PublicNavbar/>
        <Routes>
          <Route element={<FormPosts />} path="/create-post" />
          <Route element={<PostsList />} path="/list" />
          <Route element={<UpdatePost />} path="/posts/:postId" />
        </Routes>
      </BrowserRouter>  
    
  );
}

export default App;
