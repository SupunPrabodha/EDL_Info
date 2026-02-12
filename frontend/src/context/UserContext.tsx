import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User } from '../types';
import { getCurrentUser } from '../services/authService';

interface UserContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Failed to get current user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (username: string, password: string) => {
    if (username && password) {
      const mockUser: User = {
        id: '1',
        username,
        name: username.charAt(0).toUpperCase() + username.slice(1),
        email: `${username}@edl.lk`,
        department: 'Distribution',
        role: 'Employee'
      };
      localStorage.setItem('edl_user', JSON.stringify(mockUser));
      setUser(mockUser);
    }
  };

  const logout = () => {
    localStorage.removeItem('edl_user');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
