import { useState, useContext, createContext, useEffect } from "react";
import AuthService from "../Services/auth.service";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser);
  //   รับ user ไปใส่ state user/ arrow function แบบย่อ
  const login = (user) => setUser(user);
  const logout = () => {
    // ฟังก์ชั่น logout
    AuthService.logout();
    // ตั้ง user ให้เป็น null
    setUser(null);
  };

  const getUser = () => {
    // หา user ใน Local storage
    const temp = localStorage.getItem("user");
    // เปลี่ยนเป็น JSON
    const savedUser = JSON.parse(temp);
    return savedUser || null;
  };
  //   useEffect รับ callback function กับ Dependencies
  useEffect(() => {
    const temp = JSON.stringify(user);
    localStorage.setItem("user", temp);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
