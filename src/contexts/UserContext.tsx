'use client';
import React, { createContext, useContext, useState } from 'react';

//create user type
export type User = {
  name: string;
  username: string;
  email: string;
  isLoggedIn?: boolean;
};

// create user context properties
export interface UserCTXProps {
  user: User | null;
  setUser: (user: Partial<User> | null) => void;
}

// create user provider properties
type UserProviderProps = {
  children: React.ReactNode;
};

//create user context
export const UserContext = createContext<UserCTXProps | null>(null);

//custom hook to access properties from outside
const useUserContext = (): UserCTXProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return { ...context };
};

const UserProvider: React.FC<UserProviderProps> = ({
  children,
}: UserProviderProps) => {
  // create user state
  const [user, setUser] = useState<User | null>(null);

  // function to update user
  const updateUser = (user: Partial<User> | null) => {
    setUser((prev) => (user ? ({ ...prev, ...user } as User) : null));
  };

  const data = { user: user, setUser: updateUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider, useUserContext };
