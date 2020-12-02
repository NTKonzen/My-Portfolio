import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" >
          <About />
        </Route>
        <Route exact path="/about" >
          <About />
        </Route>
        <Route exact path="/portfolio" >
          <Portfolio />
        </Route>
        <Route exact path="/contact" >
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
