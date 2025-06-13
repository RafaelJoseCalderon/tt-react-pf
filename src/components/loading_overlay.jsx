import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useLoggingIn } from "../hooks/use_ logging_in";

const LoadingOverlay = () => {
  const { loggingIn } = useLoggingIn();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (!loggingIn) {
      setShowSpinner(false);
      return;
    }

    const timer = setTimeout(() => setShowSpinner(true), 1000);
    return () => clearTimeout(timer);
  }, [loggingIn]);

  if (!loggingIn) return null;

  return (
    <div className="loading-overlay">
      {showSpinner && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      )}
    </div>
  );
};

export default LoadingOverlay;
