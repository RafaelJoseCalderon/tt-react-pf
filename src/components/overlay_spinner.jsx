import { Spinner } from "react-bootstrap";

const OverlaySpinner = ({ loaded, children }) => {
  return (
    <div className="overlay-spinner" >{loaded
      ? <Spinner animation="border" role="status" />
      : <>{children}</>
    }
    </div>
  );
};

export default OverlaySpinner;