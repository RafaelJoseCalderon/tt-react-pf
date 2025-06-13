import { NotifContext } from "../context/notification_context";
import { useContext } from "react";

export const useNotification = () => {
  const { notification, setNotification } = useContext(NotifContext);

  const showNotification = ({ type, message }) => {
    setNotification({ type, message });
  };

  const clearNotification = () => {
    setNotification({ type: "", message: "" });
  };

  return { notification, showNotification, clearNotification };
};
