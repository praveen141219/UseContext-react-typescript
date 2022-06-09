import { createContext, ReactNode, useState } from "react";

export const dataContext = createContext({
  data: null,
  setData: (p: object) => {},
});
interface IproviderProps {
  children?: ReactNode;
}
export const dataProvider = ({ children }: IproviderProps) => {
  const [data, setData] = useState<object | null>(null);
  const value: any = { data, setData };
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};




