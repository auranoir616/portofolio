import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from './Card';
import ButtonNoLink from './ButtonNoLink';
import fastwork from '../assets/fastworkLogo.png';
function ModalService() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonNoLink onClick={handleShow} style={{fontFamily:'Courier Prime'}}>
       My Services
      </ButtonNoLink>

      <Modal show={show} onHide={handleClose} style={{fontFamily:'Courier Prime'}}>
        <Modal.Header >
          <Modal.Title >My Freelance Services</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <Card link='https://fastwork.id/user/noir1349/web-development-97766390?source=seller-center_my-service_share-link' image={fastwork}>
                Web Development Services
                </Card>
                <Card link='https://fastwork.id/user/noir1349/data-entry-75234170?source=seller-center_my-service_share-link' image={fastwork}>
                Data Entry
                </Card>

        </Modal.Body>
        <Modal.Footer>
            <ButtonNoLink onClick={handleClose}>Close</ButtonNoLink>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalService;