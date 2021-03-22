import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';

// This is the basic component of the application
function App() {
  return (
    // In React a component can include only one tag)
    <BrowserRouter>
    {/*In react "class" is in the attribute "className"*/}
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts/:id" component={Post} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
