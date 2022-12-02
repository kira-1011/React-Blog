import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import BlogDetails from './BlogDetails';
import CreateBlog from './CreateBlog';
import NotFound from './NotFound';

function App() {
  return ( 
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
          <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route exact path="/create">
              <CreateBlog />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;