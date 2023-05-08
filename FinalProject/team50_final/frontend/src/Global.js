import { useState } from 'react';


export const useShareableState = () => {
    const [Login, setLogin] = useState(false);
  const [User, setUser] = useState([]);
  return {
    Login,
    setLogin,
    User,
    setUser
  }
}
