import { useState } from "react";

import FormPosts from "./components/Posts/FormPosts";
import PostsList from "./components/Posts/PostsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <FormPosts />
        <PostsList />
      </div>
    </>
  );
}

export default App;
