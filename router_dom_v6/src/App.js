import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Post from "../src/components/Post";
import Posts from "../src/components/Posts";
import Error from "./components/Error";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hello" />} />

        <Route path="/hello/*" element={<Hello />}>
          <Route path="new" element={<p>I love let finish HW.</p>} />
        </Route>

        <Route path="/posts" element={<Posts />} />

        <Route path="/posts/:postId" element={<Post />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
