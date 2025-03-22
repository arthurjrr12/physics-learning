import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  isLoggedIn: boolean;
  userEmail: string | null;
  currentPath: string | null;
  userProgress: Record<string, number>;
  login: (email: string) => void;
  logout: () => void;
  setCurrentPath: (path: string) => void;
  updateProgress: (pathId: string, increment: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<Record<string, number>>({
    engineering: 0,
    healthcare: 0,
    aviation: 0
  });

  const login = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
  };

  const updateProgress = (pathId: string, increment: number) => {
    setUserProgress((prev) => {
      const currentProgress = prev[pathId] || 0;
      const newProgress = Math.min(currentProgress + increment, 100);
      return { ...prev, [pathId]: newProgress };
    });
  };

  return (
    <UserContext.Provider 
      value={{ 
        isLoggedIn, 
        userEmail, 
        currentPath, 
        userProgress,
        login, 
        logout, 
        setCurrentPath,
        updateProgress
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
