 import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import pic from "./pic.png"
function App() {
  return (
    <div className="container">
      
      <header className="App-header">
      <img src ={pic} alt="mypic" width="300px" />
         <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <h2>This is Header inside App-Component.</h2>
        <h2>Welcom:) </h2>
      </header>
      <Content />
    </div>
  );

}
class Content extends React.Component {
  render() {
    return (

      <div className="App-content">
        <h2>This content-component is placed inside App-component.</h2>
      </div>
    )
  };
}
export default App;
