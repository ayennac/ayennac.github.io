import logo from './logo.svg';

import { useState } from 'react'

import './App.css';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import CardGroup from './components/CardGroup'
import Footer from './components/Footer'

function App() {

  const projects = [
    {"name": "ChoreBuddy",
    "desc": "ChoreBuddy is a web app that uses the principles of body doubling and community to help users finish their chores.",
    "techstack": ["Python ", "PostGreSQL ", "Flask"],
    "link": "https://github.com/ayennac/proj-chores",
    "linktitle": "Github",
    "img": "./default.jpg"
    },
    {"name": "Local Government Diversity Dashboard",
    "desc": "The Local Government Government Diversity Dashboard is a tool for tracking and visualizing demographic data in local government",
    "techstack": ["R ", "Tableau"],
    "link": "https://www.diversitydashboard.org/",
    "linktitle": "Local Government Diversity Dashboard",
    "img": "default.jpg"
    }
    ]
  return (
    <div className="App">
  
      <div className = 'container'>
        <Jumbotron/>
      </div>
      <div className = 'container'>
        <CardGroup title = "Projects" cards = {projects} grid = "col-sm-6"/> 
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
