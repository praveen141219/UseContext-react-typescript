import * as React from "react";
import B from "./B";
import { userContext } from "./UserContext";

interface IAProps {}

const A: React.FunctionComponent<IAProps> = (props) => {
  const { userData, setUserData } = React.useContext(userContext);

  console.log(userData);
  React.useEffect(() => {
    setUserData({
      name: "balendra",
      age: 21,
    });
  }, []);
  return (
    <>
      <B />
    </>
  );
};

export default A;
