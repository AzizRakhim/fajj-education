import './App.scss';
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";
import Students from './components/Students/Students';
import Teachers from './components/Teachers/Teachers';
import Groups from './components/Groups/Groups';
import StudentEdit from './components/Students/StudentEdit/StudentEdit';
import StudentAdd from './components/Students/StudentAdd/StudentAdd';
import TeacherAdd from './components/Teachers/TeacherAdd/TeacherAdd';
import TeacherEdit from './components/Teachers/TeacherEdit/TeacherEdit';
import GroupAdd from './components/Groups/GroupAdd/GroupAdd';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='students' element={<Students />} />
      <Route path='teachers' element={<Teachers />} />
      <Route path='groups' element={<Groups />} />
      <Route path='students/edit/:id' element={<StudentEdit />} />
      <Route path='students/add' element={<StudentAdd />} />
      <Route path='teachers/add' element={<TeacherAdd />} />
      <Route path='teachers/edit/:id' element={<TeacherEdit />} />
      <Route path='groups/add' element={<GroupAdd />} />
    </Routes>
  );
}

export default App;
