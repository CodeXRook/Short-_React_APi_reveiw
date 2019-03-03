//APP.JS IS A COMPONENT THAT HANDLE DIFFERENT ROUTES
import React, { Component } from 'react';// KEEP THIS LINE
 import {HashRouter, Link, Route} from 'react-router-dom'; //INTERGRATE ROUTER INTO APPLICATION

//WHERE GOING TO MAKE TWO PAGERS ROUTES BELOW
//-> PAGE 1 LIST OF MUSIC VIDEOS
// -> PAGE 2 SHOWING THE YOUTUBE VIDEO

class App extends Component {
  render() {
    return (


      //EACH ROUTE IS A DIFFERENT CHANNEL
      //CHANNEL DEPENDS AKA URL PAGE
      // USE EXACT IN ROUTES OR IT'LL SHOW UP ON EVERY PAGE
    <HashRouter>
        
      <Route path ='/' exact component ={} />
      <Route path ='/video/:id' exact component={} />
    </HashRouter>
    );
  }
}

export default App;
