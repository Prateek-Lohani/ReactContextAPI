import React, { createContext,useState } from 'react';


export const UserContext=createContext();

const Context = (props) => {

    const [users,setUsers]=useState([
        {id:0,username:"John",city:"Tokyo"},
        {id:1,username:"Kevin",city:"Toronto"},
        {id:2,username:"Victor",city:"Chicago"}
    ])

  return (
    <UserContext.Provider value={{users,setUsers}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default Context;