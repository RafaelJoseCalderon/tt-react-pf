import { createContext, useState } from "react";

export const NotifContext = createContext();

const NotifProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    type: "",
    message: "",
  });

  return (
    <NotifContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotifContext.Provider>
  );
};

export default NotifProvider;
