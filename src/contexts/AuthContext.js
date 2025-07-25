import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

//để bọc vào app
export const AuthProvider = ({ children }) => {
  const [name, setName] = useState('no name');

  useEffect(() => {
    console.log('current name', name)
  }, [name]);

  const setNameCustomer = (name) => {
    console.log('tao đã nhận được name', name)
    setName(name);
    localStorage.setItem("name", JSON.stringify(name));
  };

  return (
    <AuthContext.Provider value={{ name, setNameCustomer, setName }}>
      {children}
    </AuthContext.Provider>
  );
};
//để dùng chung cho các component
export default AuthContext;
