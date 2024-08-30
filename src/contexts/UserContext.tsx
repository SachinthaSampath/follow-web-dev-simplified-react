import React, { useContext } from 'react';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export type User = {
  name: string;
  username: string;
  email: string;
  isLoggedIn?: boolean;
};

export interface UserCTXProps {
  user: User | null;
  setUser: (user: User) => void;
}

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserCTXProps | null>(null);

const useUserContext = (): UserCTXProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return { ...context };
};

const UserProvider: React.FC<UserProviderProps> = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (user: User) => {
    setUser((prev) => (user ? { ...prev, ...user } : null));
  };

  const data = { user: user, setUser: updateUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { useUserContext, UserProvider };
