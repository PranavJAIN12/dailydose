
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  const [Mode, setMode]= useState('light')

  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#171717";
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";

    }
  }

  return (
    <>
    
  <Navbar title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} toggleMode={toggleMode}/>
  <News title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode}/>
  
  
    </>
  );
}

export default App;
