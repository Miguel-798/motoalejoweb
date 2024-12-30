import Landing from './landing';
import Agendas from './Agendas';
// import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import AgendaEdit from './AgendaEdit';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path='/agendas' element={<Agendas/>} />
        <Route path='/agenda/:Nombre' element={<AgendaEdit/>} />
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
