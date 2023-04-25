import './App.css';
import rg from "../../qu/src/assests/ragul.jpg";
import Card from './quote';
import { useState } from 'react';
import Header from './header';
import Footer from './footer';



const App = () => {
  const [color, setColor] = useState("");

  

  return (
    <div>
      <Header/>
      <div  className="App" style={{backgroundColor:color}}>
        
        <Card setColor={setColor}/>

        <a href="https://instagram.com/r_g_ragul?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
        <img id="I" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png"/>
        </a>
        <a href="mailto:gauthamaragful@gmail.com" target="_blank" rel="noreferrer">
        <img id="I1" src="https://workspace.google.com/static/img/products/png/gmail.png?cache=f50ecb6"/>
        </a>
        
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
