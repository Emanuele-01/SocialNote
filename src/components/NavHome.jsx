import { useState } from "react";
import { Button, Col, Container, Dropdown, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { PRIVATE_PROFILE } from "../redux/action";

const NavHome = () => {

    const dispatch = useDispatch();
    const [singOut, setSingOut] = useState(false);


    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageProfile, setImageProfile] = useState('')
    const [age, setAge] = useState('')
    const [dayOfHiding, setDayOfHiding] = useState('')


    const baseEndpiontLogin = 'http://localhost:3001/auth/login'
    const baseEndpiontRegister = 'http://localhost:3001/auth/register'

    const dataSendLogin = {
        email: email,
        password: password
    }

    const dataSendRegister = {
        name: name,
        lastName: lastName,
        username: username,
        email: email,
        imageProfile: imageProfile,
        age: age,
        dayOfHiding: dayOfHiding
    }

    const getLogin = async () => {
        try {
            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkVtYW51ZWxlIFBpdG9uaSIsImlhdCI6MTUxNjIzOTAyMn0.ywBYEeT3Pm9ikR0tWtSlhDBnsTWKIRCn8V_7ww8eg9o'
                },
                body: JSON.stringify(dataSendLogin)
            }

            const response = await fetch(baseEndpiontLogin, option);

            if (response.ok) {
                const data = await response.json()
                dispatch({ type: PRIVATE_PROFILE, paylaod: data })
                setSingOut(true)
            }
        } catch (error) {
            console.log('error: ' + error)
        }
    }

    const getRegister = async () => {
        try {
            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkVtYW51ZWxlIFBpdG9uaSIsImlhdCI6MTUxNjIzOTAyMn0.ywBYEeT3Pm9ikR0tWtSlhDBnsTWKIRCn8V_7ww8eg9o'
                },
                body: JSON.stringify(dataSendRegister)
            }

            const response = await fetch(baseEndpiontRegister, option);

            if (response.ok) {
                const data = await response.json()
                dispatch({ type: PRIVATE_PROFILE, paylaod: data })
            }
        } catch (error) {
            console.log('error: ' + error)
        }
    }

    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
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
                                {singOut === true ? (
                                    <Button variant="dangerous p-0 mt-1 mb-1 ms-2" onClick={() => { window.location.reload() }}>
                                        Sing Out
                                    </Button>
                                ) : (
                                    <Col xs={12}>
                                        <Button variant="light p-0 mt-1 mb-1 ms-2" onClick={handleShowLogin}>
                                            Login
                                        </Button>

                                        <Modal show={showLogin} onHide={handleCloseLogin}>
                                            <Modal.Header closeButton>
                                                <Modal.Title className="fs-5">Login</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form onSubmit={getLogin}>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label className="fs-6">Email address</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="name@example.com"
                                                            autoFocus
                                                            onChange={e => { setEmail(e.target.value) }}
                                                            size="sm"
                                                        />
                                                        <Form.Label className="fs-6">Password</Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="***********"
                                                            autoFocus
                                                            onChange={e => { setPassword(e.target.value) }}
                                                            size="sm"
                                                        />
                                                    </Form.Group>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleCloseLogin}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                            </svg>
                                                        </Button>
                                                        <Button variant="primary" type="submit">
                                                            Login
                                                        </Button>
                                                    </Modal.Footer>
                                                </Form>
                                            </Modal.Body>
                                        </Modal>
                                    </Col>
                                )
                                }

                                {
                                    singOut === true ? (
                                        <div>

                                        </div>
                                    ) : (
                                        <Col xs={12}>
                                            <Button variant="light p-0 mt-1 mb-1 ms-2" onClick={handleShowRegister}>
                                                Register
                                            </Button>

                                            <Modal show={showRegister} onHide={handleCloseRegister}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title className="fs-5">Register</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form onSubmit={getRegister}>
                                                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                                            <Form.Label className="fs-6">Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="NAME"
                                                                autoFocus
                                                                onChange={e => { setName(e.target.value) }}
                                                                size="sm"
                                                            />
                                                            <Form.Label className="fs-6">Lastname</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="LASTNAME"
                                                                autoFocus
                                                                onChange={e => { setLastName(e.target.value) }}
                                                                size="sm"
                                                            />
                                                            <Form.Label className="fs-6">Username</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="USERNAME"
                                                                autoFocus
                                                                onChange={e => { setUsername(e.target.value) }}
                                                                size="sm"
                                                            />
                                                            <Form.Label className="fs-6">Email address</Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                placeholder="name@example.com"
                                                                autoFocus
                                                                onChange={e => { setEmail(e.target.value) }}
                                                                size="sm"
                                                            />
                                                            <Form.Label className="fs-6">Password</Form.Label>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="*****************"
                                                                autoFocus
                                                                onChange={e => { setPassword(e.target.value) }}
                                                                size="sm"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group controlId="formFile" className="mb-1">
                                                            <Form.Label className="fs-6">Your image Profile</Form.Label>
                                                            <Form.Control
                                                                type="file"
                                                                onChange={e => { setImageProfile(e.target.value) }}
                                                                size="sm"
                                                            />
                                                        </Form.Group>
                                                        <Form.Label className="fs-6">Age</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            placeholder="Your Age"
                                                            autoFocus
                                                            onChange={e => { setAge(e.target.value) }}
                                                            size="sm"
                                                        />
                                                        <Form.Label className="fs-6">Age</Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            placeholder="Your Age"
                                                            autoFocus
                                                            onChange={e => { setDayOfHiding(e.target.value) }}
                                                            size="sm"
                                                        />
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={handleCloseRegister}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                                </svg>
                                                            </Button>
                                                            <Button variant="primary" type="submit">
                                                                Register
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Form>
                                                </Modal.Body>
                                            </Modal>
                                        </Col>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="#features">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );


};

export default NavHome;