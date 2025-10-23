import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const register = ({ name, email, birthDate, code }) => {
    const birth = new Date(birthDate);
    const age = new Date().getFullYear() - birth.getFullYear();
    const is50plus = age >= 50;
    const isDuoc = email?.toLowerCase().endsWith("@duoc.cl");
    const hasFelices = code === "FELICES50";

    const discounts = {
      age50: is50plus,
      felices50: hasFelices,
      duoc: isDuoc,
    };

    const newUser = { name, email, birthDate, code, discounts };
    setUser(newUser);
    return newUser;
  };

  const updateUser = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, register, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
