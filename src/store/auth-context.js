import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLoggout: () => {},
});

export default AuthContext;
