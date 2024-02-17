
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {
  const [Mode, setMode]= useState('light')
  // const[active, setActive] = useState('')

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
  //   <>
    
  // <Navbar title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} toggleMode={toggleMode}/>
  // <News title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} category="general" pageSize='9' country='in'/>
  
  
  //   </>
  <BrowserRouter>
<>
<Navbar title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} toggleMode={toggleMode}/>
<Routes>
<Route path="/about" element={<About mode={Mode}/>} />

<Route path="/" element={<News title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} active={"active"} category="general" pageSize='9' country='in'/>} />
<Route path="/entertainment" element={<News title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} category="entertainment" pageSize='9' country='in'/>} />
<Route path="/technology" element={<News title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} category="technology" pageSize='9' country='in'/>} />
<Route path="/business" element={<News title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} category="business" pageSize='9' country='in'/>} />
<Route path="/health" element={<News title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} category="health" pageSize='9' country='in'/>} />
<Route path="/science" element={<News title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} category="science" pageSize='9' country='in'/>} />
<Route path="/sports" element={<News title = "𝓓𝓪𝓲𝓵𝔂𝓓𝓸𝓼𝓮" mode={Mode} category="sports" pageSize='9' country='in'/>} />

</Routes>
</>
</BrowserRouter>
  );
}

export default App;
