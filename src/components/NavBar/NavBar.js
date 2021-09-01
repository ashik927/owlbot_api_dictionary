import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <br/>
              <Link to="favourite">Favourite Word</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
      </div>
    );
};

export default NavBar;