import { useContext } from "react";
import userContext from "../../utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);
  console.log("userInfo", user);
  return (
    <>
      <h4>
        This application is developed by <span>{user.name}</span>-
        <span>{user.email}</span>
      </h4>
    </>
  );
};

export default Footer;
