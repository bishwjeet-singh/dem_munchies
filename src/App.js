import React from 'react';
import HomePage from './components/home-page/HomePage'
import MenuApp from './components/Menu/MenuApp'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/home-page/Navbar'
import Submenu from './components/home-page/Submenu'
import Sidebar from './components/home-page/Sidebar'
import CocktailApp from './components/Cocktails/CocktailApp'
import CareerApp from './components/Careers/CareerApp'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Submenu />
        <Sidebar />
          <Switch>
              <Route path = "/" exact component={HomePage}/>
              <Route path="/Menu" exact component={MenuApp}/>
              <Route path="/DIYCocktails" exact component={CocktailApp}/>
              <Route path='/OurBlog' component={() => { 
                   window.location.href = 'https://demmunchies.net' ; 
                   return null;
              }}/>
              <Route path = "/Career" exact component={CareerApp}/>

          </Switch>
      </Router>
    </>
  );
}

export default App;
