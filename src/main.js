import './style/main.scss'

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './component/header.js';
import Home from './component/home.js';
// import Footer from './component/footer.js';
// import Navbar from './component/navbar.js';
// import Search from './component/festfinder/form.js'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      //fill in later
    };
  }

  componentDidMount(){
    console.log('__STATE__', this.state);
  }

  render(){
    return(
      <div>
        <Header />
        <main>
          <Route exact path='/' component={Home} />
      </main>
      </div>
    )
  }
}
const root = document.getElementById('root');
ReactDom.render(<BrowserRouter><App /></BrowserRouter>, root)
