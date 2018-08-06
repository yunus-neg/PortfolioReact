import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar";
import About from "./components/pages/about";

// import {

// } from "@material-ui/icons";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>

          <Route path="/aa" Component={About} />
        </div>
      </BrowserRouter>

      // <div className="App">
      //   <h1>hello</h1>
      //   <h4>my name is yunus
      //       <br/> i'm a devolper or at least i'll be </h4>
      //   <img src="https://dl2.pushbulletusercontent.com/rzSavMQbZCUERNmo4i49kvekGEbrWuk1/2348b07e-074f-4d5b-adcc-5ef848f70cde.png" width="9%" />
      //   <br/>
      //   <img src="https://i2.wp.com/www.vectorico.com/wp-content/uploads/2018/02/youtube-icon.png?resize=300%2C300" onClick={()=> window.open("https://www.google.com", "_blank")} className="logo"/>
      //         </div>
    );
  }
}

export default App;
