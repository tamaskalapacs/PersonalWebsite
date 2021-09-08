import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from "./components/Home/Home"
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';


function App() {
  return (

    <Router>
      <div className = "app">
        <Navbar />
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/about" component={About} />
          <Route exact path = "/skills" component={Skills} />
          <Route exact path = "/projects" component={Projects} />
          <Route exact path = "/contact" component={Contact} />
          <Route exact path = "/education" component={Education} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
