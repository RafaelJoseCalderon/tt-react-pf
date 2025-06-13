import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";

import { useNotification } from "../hooks/use_notification";

const Notification = () => {
  const [show, setShow] = useState(false);
  const { notification } = useNotification();

  useEffect(() => {
    if (notification.message !== "") {
      setShow(true);

      const timeout = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [notification]);

  if (!show) return null;

  return (
    <Container>
      <div className="position-relative">
        <Alert
          variant={notification.type}
          className="position-absolute w-100 z-3 mt-2"
          onClose={() => setShow(false)}
          dismissible
        >
          {notification.message}
        </Alert>
      </div>
    </Container>
  );
};

export default Notification;
