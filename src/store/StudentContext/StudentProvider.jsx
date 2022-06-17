import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { studentObj } from '../../obj';

export const studentContext = createContext();

function StudentProvider({children}) {
  let [students, setStudents] = useState(studentObj);

  const reducer = (state, action) => {
    switch (action.type) {
      case "EDIT":{
        state = state.filter(item => {
          return item.id != action.payload.id
        });
        break;
      }
      default:
        break;
    }
  }

  const editHandler = (elId) => {
    dispatch({type : "EDIT", payload : { id : elId}})
  }

  let [arr, dispatch] = useReducer(reducer, students);
  
  const value = {
    arr,
    editHandler
  }


  return (
    <studentContext.Provider value={value}>
      {children}
    </studentContext.Provider>
  )
}

export default StudentProvider
