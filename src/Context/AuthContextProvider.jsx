import { createContext, useState } from "react";

export let AuthContext = createContext();
let AuthContextProvider = ({ children }) => {
  let [showForm, setShowForm] = useState(false);
  let obj = {
    showForm,
    setShowForm,
  };
  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
