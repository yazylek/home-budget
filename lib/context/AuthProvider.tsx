"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";
import { useRouter } from "next/navigation";

type AuthContextType = {
  token: string | null;
  login: (values: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [token, setToken] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const checkRefreshToken = async () => {
      try {
        const res = await api.post("/refresh", {}, { withCredentials: true });
        setToken(res.data.access_token);
      } catch (error) {
        console.error(error);
      }
    };
    checkRefreshToken();
  }, []);

  const login = async (values: { email: string; password: string }) => {
    try {
      await api.post("/login", values, {
        withCredentials: true,
      });

      const res = await api.post(
        "/refresh",
        {},
        {
          withCredentials: true,
        }
      );

      setToken(res.data.access_token);
      console.log("Zalogowano pomyślnie:", res.data);
    } catch (error) {
      console.error("Logowanie nie powiodło się:", error);
    }
  };

  const logout = async () => {
    try {
      await api.post("/logout", {}, { withCredentials: true });
      router.push("/");
      setToken(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
