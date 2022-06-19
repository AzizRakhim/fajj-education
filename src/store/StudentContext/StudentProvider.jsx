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

  let [arr, dispatch] = useReducer(reducer, students);
  
  const value = {
    arr,
    cancelHandler,
    confirmHandler,
    addHandler
  }


  return (
    <studentContext.Provider value={value}>
      {children}
    </studentContext.Provider>
  )
}

export default StudentProvider
