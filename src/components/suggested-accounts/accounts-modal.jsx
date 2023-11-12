import { CardImg, Col, Container, Row } from 'react-bootstrap';
import { useAccount } from "../../context/AccountsContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export const SuggestedAccountsModal = (props) => {

  const suggestedAccounts = useAccount();
  const {displayModal, onClose} = props;

  const [show, setShow] = useState(displayModal || false);

  const handleClose = () => {

    setShow(false);

    if (onClose)
    {
      onClose();
    }
    
  }

  console.log(suggestedAccounts);

  return (
    <>

    <Modal show={show} onHide={handleClose} animation={true}>

      <Modal.Header closeButton>

        <Modal.Title>Suggested Accounts</Modal.Title>

      </Modal.Header>

      <Modal.Body>

        {/* - - - - - </> CONTAINER </> - - - - - */}
        <Container>

          {/* - - - - - </> MAPPING </> - - - - - */}
          {!!suggestedAccounts && suggestedAccounts.map((account, index) => {

            {/* - - - - - </> RETURN </> - - - - - */}
            return (

            <>

            {/* - - - - - </> ROW </> - - - - - */}
            <Row key={`suggested-account-i${index}`}>

              {/* - - - - - </> COLUMN </> - - - - - */}
              <Col><CardImg src={account.thumbnail} className="post-avatar rounded-3" style={{width: '60px'}}></CardImg></Col>

              {/* - - - - - </> COLUMN </> - - - - - */}
              <Col xs={6}><strong>{account.username}</strong></Col>

              {/* - - - - - </> COLUMN </> - - - - - */}
              <Col><Button>Follow</Button></Col>

            </Row><br/>

            </>
            
            );

          })}

        </Container>

      </Modal.Body>

    </Modal>
    
    </>

  );

}