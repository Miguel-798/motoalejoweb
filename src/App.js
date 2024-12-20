import Landing from './views/landing';
import Agenda from './views/Agenda';
// import './views/App.css'
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
