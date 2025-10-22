import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // user: { name, email, birthDate, discounts: {age50:bool, felices50:bool, duoc:bool} }

  const register = ({ name, email, birthDate, code }) => {
    const birth = new Date(birthDate);
    const age = new Date().getFullYear() - birth.getFullYear();
    const is50plus = age >= 50;
    const isDuoc = email?.endsWith('@duoc.cl') || email?.endsWith('@duoc.cl'.toLowerCase());
    const hasFelices = code === 'FELICES50';
    const discounts = {
      age50: is50plus,
      felices50: hasFelices,
      duoc: isDuoc
    };
    const newUser = { name, email, birthDate, discounts };
    setUser(newUser);
    return newUser;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
