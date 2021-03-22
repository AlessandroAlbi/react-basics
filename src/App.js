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
    // BrowserRouter tag contains all the elements effected by the navigation
    <BrowserRouter>
    {/*In react "class" is in the attribute "className"*/}
        <div className="App">
          {/*Navbar is declared becasue it's shown on all the pages*/}
          <Navbar />
          {/*Switch is used to match the path and the to show*/}
          <Switch>
            {/*Route is the pair between path and page, the "exact" attribute, require thant the specified path and the url are exactly the same*/}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts/:id" component={Post} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
