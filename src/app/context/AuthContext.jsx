"use client";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.BASE_URL}/api/user`, {
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) setUser(data.user);
      } catch {
        setUser(null);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
