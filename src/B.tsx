import * as React from "react";
import { userContext } from "./UserContext";

interface IBProps {}

const B: React.FunctionComponent<IBProps> = (props) => {
  const { userData, setUserData } = React.useContext(userContext);
  return <>b</>;
};

export default B;
