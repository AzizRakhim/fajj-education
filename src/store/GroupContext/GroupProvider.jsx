import React, { createContext } from 'react'
import { useState } from 'react';
import { groupObj } from '../../obj';

export const groupContext = createContext();

function GroupProvider({children}) {
  let [groups, setGroups] = useState(groupObj);

  const value = {
    groups
  }

  return (
    <groupContext.Provider value={value}
    >
      {children}
    </groupContext.Provider>
  )
}

export default GroupProvider;
