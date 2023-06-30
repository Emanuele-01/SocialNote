import { useState } from "react";
import { Button, Col, Container, Dropdown, Form, Modal, Nav, Navbar } from "react-bootstrap";

const NavHome = () => {

    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const [showRegister, setShowRegister] = useState(false);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">SocialNote</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic" className="p-0 mt-1 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Col xs={12}>
                                    <Button variant="light p-0 mt-1 mb-1 ms-2" onClick={handleShowLogin}>
                                        Login
                                    </Button>

                                    <Modal show={showLogin} onHide={handleCloseLogin}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="name@example.com"
                                                        autoFocus
                                                    />
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="***********"
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseLogin}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                </svg>
                                            </Button>
                                            <Button variant="primary" onClick={handleCloseLogin}>
                                                Login
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Col>


                                <Col xs={12}>
                                    <Button variant="light p-0 mt-1 mb-1 ms-2" onClick={handleShowRegister}>
                                        Register
                                    </Button>

                                    <Modal show={showRegister} onHide={handleCloseRegister}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="NAME"
                                                        autoFocus
                                                    />
                                                    <Form.Label>Lastname</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="LASTNAME"
                                                        autoFocus
                                                    />
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="name@example.com"
                                                        autoFocus
                                                    />
                                                    <Form.Label>Username</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="USERNAME"
                                                        autoFocus
                                                    />
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="*****************"
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseRegister}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                </svg>
                                            </Button>
                                            <Button variant="primary" onClick={handleCloseRegister}>
                                                Register
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                </Col>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );


};

export default NavHome;