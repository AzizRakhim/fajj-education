import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GroupProvider from './store/GroupContext/GroupProvider';
import StudentProvider from './store/StudentContext/StudentProvider';
import TeacherProvider from './store/TeacherContext/TeacherProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StudentProvider>
      <TeacherProvider>
        <GroupProvider>
          <App />
        </GroupProvider>
      </TeacherProvider>
    </StudentProvider>
  </BrowserRouter>
);


