import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  avatar?: string;
  role: "user" | "admin";
  joinedDate: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string; user?: User }>;
  signup: (data: SignupData) => Promise<{ success: boolean; message: string; user?: User }>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

interface SignupData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const CURRENT_USER_KEY = "solaro-current-user";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(data.user));
      }
      return { success: data.success, message: data.message, user: data.user };
    } catch {
      return { success: false, message: "Server error. Please try again." };
    }
  }, []);

  const signup = useCallback(async (signupData: SignupData) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(data.user));
      }
      return { success: data.success, message: data.message, user: data.user };
    } catch {
      return { success: false, message: "Server error. Please try again." };
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  }, []);

  const updateProfile = useCallback(async (data: Partial<User>) => {
    if (!user) return;
    try {
      const res = await fetch(`/api/auth/profile/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setUser(result.user);
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(result.user));
      }
    } catch {
      // fallback: update locally
      const updated = { ...user, ...data };
      setUser(updated);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updated));
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
