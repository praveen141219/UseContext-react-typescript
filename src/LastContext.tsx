import { createContext, ReactNode, useState } from "react";

interface Ilast {
  lname: string;
  fname: string;
  age: number;
  phone: number;
}
interface IproviderProps {
  children?: ReactNode;
}
export const lastContext = createContext({
  last: null,
  setLast: (p: [Ilast]) => {},
});

export const lastProvider = ({ children }: IproviderProps) => {
  const [last, setLast] = useState<Ilast | null>(null);
  const value: any = { last, setLast };
  return <lastContext.Provider value={value}>{children}</lastContext.Provider>;
};
