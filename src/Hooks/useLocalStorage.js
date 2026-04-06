import React, { useState } from 'react'

function useLocalStorage(key, initialvalue){
  const [value, setValue] = useState(()=>{
    const stored=localStorage.getItem(key)
    return stored?JSON.parse(stored):initialvalue
  });
  const setStoredValue=(newValue)=>{
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }
  return [value, setStoredValue];
   
  
}

export default useLocalStorage
