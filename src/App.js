import React from 'react';
import './App.css';
import Navbar from './Header';
import Footer from './Footer';

function App() {

return (
  <div>
    <Navbar className="nav"/>
    <div className="site">
      <h1 className="title">ピカピカハスボー:</h1>
      <h2 className="logo"><img src={require('./logo.png')} alt="shining lotad"/></h2>
      <div className="introContainer">
        <p2 className="intro">
        --<br/>/ Hello..<br/><br/>I'm Vincent.  <br/><br/> I make shiny things.<br/><br/>
        Please explore this site to learn more. /<br/>--<br/><br/>
        </p2>
      </div>
      <h2 className="logo2"><img src={require('./lotad.gif')} alt="shining lotad" class="w3-image"/></h2>
      <p3 className="outro">
      2021年以来輝いている
      SHINING SINCE 2021
      <Footer/>
      </p3>
    </div>
  </div>
  );
}

export default App;
