import Header from './components/Header';
// import Hero from './components/Hero';
import NoMatch from './components/NoMatch';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Friends from "../src/components/Friends";
import NitroWithBadge from "./components/Nitro";


function App() {
 
  return (
   <Router>
      <Routes>
           <Route exact path='/' element={<Header />} />
           <Route exact path="/channels" element={<Home/>}/>
           <Route exact path="/channels:id" element={<Home />}/>
           <Route  element={<Friends />}/>
           <Route  element={<NitroWithBadge />}/>
          
            <Route  element={<NoMatch />}/>
      </Routes>
    </Router>
     
  );
}

export default App;
