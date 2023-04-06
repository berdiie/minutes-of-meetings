import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'; 
import Section from "./components/Section";
import Home from './components/Home';
import Section2 from './components/Section2';


function App() {
  return (
    <>
    <div className='one'>
    <Home/>
    </div>
    <div className='two'>
    <Section/>
    </div>
    <br></br>
    <div className='three'>
      <Section2/>
    </div>
    </>
  );
}

export default App;
