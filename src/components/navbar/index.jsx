import { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { SuggestedAccountsModal } from "../suggested-accounts/accounts-modal";
import { useUser } from "../../context/UserContext";

export const NavHeader = () => {

    const [display, setDisplay] = useState(false);
    const user = useUser();

    return (
      <>
      <Navbar expand="lg" className="bg-body-tertiary">

        <Container>

          {/* - - - - - </> LOGO </> - - - - - */}
          <Navbar.Brand href="#home">React-ContexGram</Navbar.Brand>

          {/* - - - - - </> USER CONTEXT </> - - - - - */}
          <span>Welcome back <strong>{user.username}!</strong></span>

          {/* - - - - - </> USER CONTEXT </> - - - - - */}
          <span>Followers: <strong>{user.followers}</strong></span>

        </Container>

        {/* - - - - - </> BUTTON </> - - - - - */}
        <Button variant="outline-success" onClick={() => { if (!display) { setDisplay(true); } else { setDisplay(false); } }}>Suggested Accounts</Button>

      </Navbar>
      
      {!!display && <SuggestedAccountsModal displayModal={true} onClose={() => setDisplay(false)}/>}
      
      </>
    );
};