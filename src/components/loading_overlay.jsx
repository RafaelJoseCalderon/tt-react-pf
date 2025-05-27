import { Spinner } from 'react-bootstrap';
import { useLoggingIn } from "../hooks/use_ logging_in";

const LoadingOverlay = () => {
  const { loggingIn } = useLoggingIn();

  return (
    <>{loggingIn &&
      <div className="loading-overlay">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    }</>);
};

export default LoadingOverlay;
