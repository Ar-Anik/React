import { Redirect, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import PostsTopic from './components/PostTopic';
import Services from './components/Services';

function App() {
  const isLoggedIn = false;

  return (
      <>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />

          <Route exact path="/dashboard" component={Dashboard} />
          
          {/* <Route exact path="/services" component={Services} /> */}

          {/* Props Pass in a Child
          <Route exact path="/services">
            <Services number="5" />
          </Route> */}

          {/* Props Pass in a Child by render Props */}
          <Route exact path="/services" component={() => <Services number="5" />} />

          {/* Dynamic Path */}
          <Route exact path="/posts/:category" component={Posts} />

          {/* Dynamic Path */}
          <Route exact path="/posts/:category/:topic" component={PostsTopic} />

          <Route exact path="/Login">
            {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
          </Route>

          <Route component={Error} />
        </Switch>
      </>
  );
}

export default App;
