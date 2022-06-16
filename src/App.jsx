import './App.css';
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";
import Students from './components/Students/Students';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='students' element={<Students />} />
    </Routes>
  );
}

export default App;
