import { NotifContext } from "./notification_context";
import { useState } from "react";

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
