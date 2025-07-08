import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useLoggingIn } from "../hooks/use_ logging_in";

import styled, { keyframes } from 'styled-components';

const fadeInBackground = keyframes`
  to {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  pointer-events: auto;

  background-color: rgba(255, 255, 255, 0);

  animation: ${fadeInBackground} 0.5s ease forwards;
  animation-delay: 0.5s;
`;

const SpinnerSC = styled(Spinner)`
  border-width: 0.75rem;
  width: 7.5rem;
  height: 7.5rem;
`;

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
    <Div>
      {showSpinner && (
        <SpinnerSC animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </SpinnerSC>
      )}
    </Div>
  );
};

export default LoadingOverlay;
