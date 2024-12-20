import Landing from './landing';
import Agenda from './Agenda';
// import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path='/agenda' element={<Agenda/>} />
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
