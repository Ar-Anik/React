import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';


function App() {
  return (
    <Router>
      <Navbar/>
      
      <Route exact path="/services">
        <Services/>
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
      
    </Router>
      
  );
}

export default App;
