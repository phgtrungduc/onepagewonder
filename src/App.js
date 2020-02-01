import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation/Navigation.js';
import Header from './Component/Header/Header.js';
import Section from './Component/Section/Section.js';
import Footer from './Component/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Section uutien1="2" uutien2="1" head="Concepts to become an advanced React developer" body="Increase you react level by using these techniques! Dhanraj Acharya in wineofbits" link="img/01.jpg" />
      <Section uutien1="1" uutien2="2" head="How to use React.js to create a Chrome extension in 5 minutes" body="How to use React.js to create a Chrome extension in 5 minutes" link="img/02.jpg" />
      <Section uutien1="2" uutien2="1" head="How to use React.js to create a Chrome extension in 5 minutes" body="How to use React.js to create a Chrome extension in 5 minutes" link="img/03.jpg" />
      <Footer />
    </div>
  );
}

export default App;
