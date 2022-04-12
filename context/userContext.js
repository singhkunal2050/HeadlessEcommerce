import { createContext, useState, useEffect } from "react";
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const isLoggedIn = () =>{
    if(user==null)
      return true
    return false
  }

  const userStore = {user , setUser , isLoggedIn}

  return (
    <UserContext.Provider value={userStore}>
      {props.children}
    </UserContext.Provider>
  );
};


