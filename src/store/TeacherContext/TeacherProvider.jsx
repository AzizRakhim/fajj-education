import React, { useState } from 'react'
import { createContext } from 'react';
import { teacherObj } from '../../obj';

export const teacherContext = createContext();

function TeacherProvider({children}) {
  let [teachers, setTeachers] = useState(teacherObj);

  const value = {
    teachers
  }

  return (
    <teacherContext.Provider value={value}>
      {children}
    </teacherContext.Provider>
  )
}

export default TeacherProvider;
