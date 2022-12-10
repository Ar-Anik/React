import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../src/components/Header";
import Post from "../src/components/Post";
import Posts from "../src/components/Posts";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/hello" />
        </Route>

        <Route exact path="/hello" component={Hello} />

        <Route exact path="/posts" component={Post} />

        <Route exact path="/posts/:postId" component={Posts} />
      </Switch>
    </>
  );
}

export default App;
