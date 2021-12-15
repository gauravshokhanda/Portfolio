
import { useContext } from 'react';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/ProductList/ProductList';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from "./context";
import { BrowserRouter ,Route , Switch} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  

  return (
   <div 
   style={{
    backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",
  }}
   >
     <Toggle/>
     <BrowserRouter>
     <Navbar/>
     <Switch>
     <Route exact path="/home">
            <Intro/>
            <About/>
            <ProductList/>
            <Contact/>
      </Route>
     <Route exact path="/intro">
            <Intro/>
      </Route>
      <Route exact path="/about">
             <About/>
      </Route>
      <Route exact path="/portfolio">
           <ProductList/>
      </Route>
      <Route exact path="/contact">
          <Contact/> 
      </Route>
      </Switch>
     
     </BrowserRouter>

    
     
     
    
    
   </div>
  );
}

export default App;
