//APP.JS IS A COMPONENT THAT HANDLE DIFFERENT ROUTES
import React, { Component } from 'react';// KEEP THIS LINE
import {HashRouter, Link, Route} from 'react-router-dom'; //INTERGRATE ROUTER INTO APPLICATION

//PAGES TO IMPORT IN APP.JS
import Home from './containers/home';
import Video from './containers/video';

//WHERE GOING TO MAKE TWO PAGERS ROUTES BELOW
//-> PAGE 1 LIST OF MUSIC VIDEOS
// -> PAGE 2 SHOWING THE YOUTUBE VIDEO

class App extends Component {

//YOU'LL NEVER LOSE THE PROPS, BUT YOU'LL LOSE YOUR 
//IF SIBLINGS NEED TO TALK TO EACH OTHER THEN WE CAN USE STATEFULL
  state = {

  }

  render() {
    return (

    <>
      //EACH ROUTE IS A DIFFERENT CHANNEL
      //CHANNEL DEPENDS AKA URL PAGE
      // USE EXACT IN ROUTES OR IT'LL SHOW UP ON EVERY PAGE
    <HashRouter>
        
      <Route path ='/' exact component ={Home} /> 
      <Route path ='/video/:id' exact component={Video} />
    </HashRouter>


     </>
    );
  }
}

export default App;

/* 
LOCAL STORAGE FORCES YOU TO FOLLOW A DESIGN PATTERN SAME AS REDUX DOES
IF USING LOCAL STORAGE YOU WON'T NEED AN TO PASS IT DONW IN APPLICATION STATE
EVERY COMPONENT TALKS WITH

/service
  Storage.js

  Storage ={}
  Storage.getListOfUser()
  Storage.getListtOfUserFeed(username)
  Storage.CreateNewUser()

  WHITCH EVER COMPONENT NEEDS THAT DATA, JUST CALL THAT FUNCTION
  BY CREATING LOCAL STORAGE, YOU FUTURE PROOF IT, JUST GO INSIDE AND CHANGE IT OUT API REQUEST, FIRE BASE, WHATEVER
*/