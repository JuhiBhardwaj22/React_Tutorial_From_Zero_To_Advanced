import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});

userContext.displayName = "userContext"; //this will add contextname so that it will help for debugging

export default userContext;
