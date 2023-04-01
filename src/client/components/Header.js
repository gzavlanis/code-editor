import React from "react";
import { Button, ButtonToolbar, Container } from 'react-bootstrap';

const Header = () => (
    <div>
        <Container>
            <h2>Online Code Editor</h2>
            <ButtonToolbar>
                <Button bsstyle = "info" href= "/">Home</Button>
                <Button bsStyle = "info" href = "/editor">Code Editor</Button>
            </ButtonToolbar>
        </Container>
        <hr/>
    </div>
);

export default Header;