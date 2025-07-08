import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;

  min-height: ${(props) => (props.$loaded ? '65vh' : '45vh')};
  justify-content: ${(props) => (props.$loaded ? 'center' : 'start')};
`;

const SpinnerSC = styled(Spinner)`
  border-width: 0.75rem;
  width: 7.5rem;
  height: 7.5rem;
`;

const OverlaySpinner = ({ loaded, children }) => {
  return (
    <Div $loaded={loaded}>
      {loaded
        ? <SpinnerSC animation="border" role="status" />
        : <>{children}</>
      }
    </Div>
  );
};

export default OverlaySpinner;