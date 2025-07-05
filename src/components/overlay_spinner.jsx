import { Spinner } from "react-bootstrap";

const OverlaySpinner = ({ loaded, children }) => {
  return (
    <div
      className={loaded ? "overlay-spinner" : "overlay-spinner loaded"}
    >
      {loaded
        ? <Spinner animation="border" role="status" />
        : <>{children}</>
      }
    </div>
  );
};

export default OverlaySpinner;