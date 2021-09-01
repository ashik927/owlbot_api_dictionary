import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import SearchShow from './components/SearchShow';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllSearchDisplay from './components/AllSearchDisplay';
import FavouriteWord from './components/Favourite/FavouriteWord';

function App() {
  return (
    <>
      <Router>
      <NavBar />

        <Switch>
          <Route exact path="/">
            <Header />
            <SearchBox />
          </Route>

          <Route path="/favourite">
            <FavouriteWord />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
