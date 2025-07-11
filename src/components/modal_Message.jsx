import { Modal, Button } from "react-bootstrap";

const ModalMessage = ({ show, onClose, onConfirm }) => {
  const onAction = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Estás seguro de que quieres eliminar este producto? Esta acción no se puede deshacer.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        {onConfirm &&
          <Button variant="danger" onClick={onAction}>
            Eliminar
          </Button>
        }
      </Modal.Footer>
    </Modal>
  );
};

export default ModalMessage;