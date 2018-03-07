import './style/main.scss'

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './component/header.js';
import Home from './component/home.js';
import Navbar from './component/navbar.js';
import About from './component/about.js';
import Search from './component/festfinder/form.js'
import Sidebar from './component/sidebar/sidebar.js'
import Footer from './component/footer.js';

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
      <div id='container'>
        <Header />
        <Navbar />
        <Sidebar />
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </main>
        <Footer />
      </div>
    )
  }
}
const root = document.getElementById('root');
ReactDom.render(<BrowserRouter><App /></BrowserRouter>, root)
