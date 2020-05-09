import React from 'react';
import { Switch , Route } from "react-router-dom";


import "./App.scss"

//components
import NavBar from "./components/navbar.js"
import Footer from "./components/footer.js"
import Contact from "./components/contact.js"

function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route path="/contact" component={Contact}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
