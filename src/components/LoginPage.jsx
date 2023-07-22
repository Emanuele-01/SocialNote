import { useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLogin, getRegister } from "../redux/action";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigated = useNavigate();

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
    const [dayOfBirth, setDayOfBirth] = useState('')

    const loading = useSelector(state => state.loading.content);

    const dataSendLogin = {
        email: email,
        password: password
    }

    const dataSendRegister = {
        name: name,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        imageProfile: imageProfile,
        age: age,
        dayOfHiding: dayOfBirth
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        dispatch(getLogin(dataSendLogin, navigated))
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        dispatch(getRegister(dataSendRegister, navigated));
    }

    return (
        <>
            <Container className="containerLogin-css p-5 mt-3">
                <Row className="justify-content-center">
                    <Col xs={8}>
                        <h2 className="fs-2 text-center title-css" >Welcome to SocialNote</h2>
                        <p className="fs-4 text-center">
                            Write here your thoughts...
                        </p>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center fs-2 mb-4 paragraph-css">Login</Card.Title>
                                <Row className="justify-content-center mb-4">
                                    <Col xs={8}>
                                        <Form onSubmit={handleLogin}>
                                            <Form.Group className="text-center" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="fs-5 mb-3 text-center paragraph-css">Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="es: name@example.com"
                                                    className="mb-4"
                                                    autoFocus
                                                    onChange={e => { setEmail(e.target.value) }}
                                                    value={dataSendLogin.email}
                                                    size="md"
                                                />
                                                <div className="border border-1 border-black mb-3"></div>
                                                <Form.Label className="fs-5 mb-3 text-center paragraph-css">Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="your password"
                                                    autoFocus
                                                    onChange={e => { setPassword(e.target.value) }}
                                                    value={dataSendLogin.password}
                                                    size="md"
                                                />
                                            </Form.Group>
                                            <div className="d-flex justify-content-end">
                                                <Button className="p-2 mt-3" variant="dark" type="submit">
                                                    {loading === true ? (
                                                        <Spinner className="ms-3 me-3" animation="grow" variant="light" size="sm" />
                                                    ) : (
                                                        'Login'
                                                    )}
                                                </Button>
                                            </div>
                                        </Form>
                                    </Col>
                                </Row>
                                <h3 className="fs-5 text-center mb-2 paragraph-css">or</h3>

                                <Row className="justify-content-center">
                                    <Col xs={3} className="text-center">
                                        <div className="border border-1 border-black mb-2"></div>
                                        <Button variant="dark p-2 mt-1 mb-1 " onClick={handleShowRegister} >
                                            {loading === true ? (
                                                <Spinner className="ms-3 me-3" animation="grow" variant="light" size="sm" />
                                            ) : (
                                                'Register'
                                            )}
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


            <Modal show={showRegister} onHide={handleCloseRegister}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-5">Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label className="fs-6">Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="your name"
                                autoFocus
                                onChange={e => { setName(e.target.value) }}
                                value={dataSendRegister.name}
                                size="sm"
                            />
                            <Form.Label className="fs-6">Lastname</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="your lastname"
                                autoFocus
                                onChange={e => { setLastName(e.target.value) }}
                                value={dataSendRegister.lastName}
                                size="sm"
                            />
                            <Form.Label className="fs-6">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="your username"
                                autoFocus
                                onChange={e => { setUsername(e.target.value) }}
                                value={dataSendRegister.username}
                                size="sm"
                            />
                            <Form.Label className="fs-6">Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                onChange={e => { setEmail(e.target.value) }}
                                value={dataSendRegister.email}
                                size="sm"
                            />
                            <Form.Label className="fs-6">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="your password"
                                autoFocus
                                onChange={e => { setPassword(e.target.value) }}
                                value={dataSendRegister.password}
                                size="sm"
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-1">
                            <Form.Label className="fs-6">Your image Profile</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="your image profile"
                                onChange={e => { setImageProfile(e.target.value) }}
                                size="sm"
                                value={dataSendRegister.imageProfile}
                            />
                        </Form.Group>
                        <Form.Label className="fs-6">Age</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Your Age"
                            autoFocus
                            onChange={e => { setAge(e.target.value) }}
                            value={dataSendRegister.age}
                            size="sm"
                        />
                        <Form.Label className="fs-6">Age</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Your Age"
                            autoFocus
                            value={dataSendRegister.dayOfHiding}
                            onChange={e => { setDayOfBirth(e.target.value) }}
                            size="sm"
                        />
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseRegister}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>
                            </Button>
                            <Button variant="primary" type="submit" onClick={handleCloseRegister}>
                                Sign in
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LoginPage;