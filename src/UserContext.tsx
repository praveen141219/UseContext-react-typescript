import { createContext, ReactNode, useState } from "react";
interface Iuser {
  name: string;
  age: number;
}
interface IproviderProps {
  children?: ReactNode;
}
export const userContext = createContext({
  userData: null,
  setUserData: (p: object) => null,
});

export const UserProvider = ({ children }: IproviderProps) => {
  const [userData, setUserData] = useState<Iuser | null>(null);
  const value: any = { userData, setUserData };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
