import { User } from "@/types/user.types";
import { createContext, useEffect, useState } from "react";
import { logout } from "@/api/auth";

type AuthContextType = {
  loading: boolean;
  user: User | null;
  loginUser: (user: User) => void;
  logoutUser: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/auth/me", {
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();
        setUser(data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const loginUser = (user: User) => {
    setUser(user);
  };

  const logoutUser = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
