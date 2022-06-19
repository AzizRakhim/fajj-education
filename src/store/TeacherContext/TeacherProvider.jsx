import React, { useReducer, useState } from 'react'
import { createContext } from 'react';
import { teacherObj } from '../../obj';

export const teacherContext = createContext();

function TeacherProvider({children}) {
  let [teachers, setTeachers] = useState(teacherObj);

  const reducer = (state, action) => {
    switch (action.type) {
      case "CANCEL":{
        return state = state.filter(item => {
          return item.id != action.payload.id
        });
      }
      case "CONFIRM": {
        state.forEach(item => {
          if(item.id === action.payload.elId){
            item.name = action.payload.elName
            item.number = action.payload.elPhone
          }
        });
        return [...state];
      }
      case "ADD": {
        return [action.payload.obj, ...state];
      }
      
      default:
        break;
    }
  }

  const cancelHandler = (elId) => {
    dispatch({type : "CANCEL", payload : { id : elId}})
  }

  const confirmHandler = (id, name, phone) => {
    dispatch({type : "CONFIRM", payload : { elId : id, elName : name, elPhone : phone }});
  }

  const addHandler = (elObj) => {
    dispatch({type : "ADD", payload : { obj : elObj }});
  }

  let [arr, dispatch] = useReducer(reducer, teachers);

  const value = {
    arr,
    addHandler,
    cancelHandler,
    confirmHandler
  }

  return (
    <teacherContext.Provider value={value}>
      {children}
    </teacherContext.Provider>
  )
}

export default TeacherProvider;
