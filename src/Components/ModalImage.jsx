import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonNoLink from './ButtonNoLink';

function ModalImage({image, desc}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={image} alt="" className='h-1/4 w-2/5 m-1 max-md:h-full  max-md:w-full cursor-pointer' onClick={handleShow} />
      <Modal show={show} onHide={handleClose}  size="lg" centered >
        {/* <Modal.Header >
          <Modal.Title>My Freelance Services</Modal.Title>
        </Modal.Header> */}
        <Modal.Body >
          <img src={image} alt="" />
        </Modal.Body>
        <Modal.Footer>
            <ButtonNoLink onClick={handleClose}>Close</ButtonNoLink>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalImage;