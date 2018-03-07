import React from 'react';
import {Link} from 'react-router-dom'

//write module
//nav html being rendered
class Navbar extends React.Component {
  render() {
    return (
      <div id='navbar'>
        <p id='navp'>


            <Link to="/">
              <a className='navlink'>Home</a>
            </Link>

            <Link to="/about">
              <a className='navlink'>About</a>
            </Link>

            <Link to="/festfinder">
              <a className='navlink'>Festfinder</a>
            </Link>

            <Link to="/signin">
              <a className='navlink'>Sign up / Sign in</a>
            </Link>


        </p>
      </div>
    )
  }
}

export default Navbar;
