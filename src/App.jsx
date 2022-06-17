import './App.css';
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";
import Students from './components/Students/Students';
import Teachers from './components/Teachers/Teachers';
import Groups from './components/Groups/Groups';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='students' element={<Students />} />
      <Route path='teachers' element={<Teachers />} />
      <Route path='groups' element={<Groups />} />
    </Routes>
  );
}

export default App;
