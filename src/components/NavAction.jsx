import { useState } from "react";
import { Button, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/action";

const NavAction = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const signOut = useSelector(state => state.singout.content);
    const profile = useSelector(state => state.profile.content);

    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');


    const localDatePost = () => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let finalDate = year.toString() + '-' + month.toString() + '-' + day.toString();
        return finalDate;
    };

    const getPostLocation = () => {
        let fetchLocation;

        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longidude } = position.coords;

            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longidude}`

            fetchLocation = await fetch(url).then(response => { response.json() }).catch('error fetch');

        })

        return fetchLocation;
    };


    const dataPostSend = {
        title: title,
        bodyText: bodyText,
        user: profile
    };

    const handlePost = (event) => {
        event.preventDefault();
        dispatch(getPost(dataPostSend))
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="navAction-css justify-content-center">

                <Nav>
                    <Nav.Item className="me-3 mt-1 fs-5">
                        <Nav.Link>Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="me-3">
                        <Button variant="dark rounded-circle p-2" onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>New Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {
                                    signOut === true ? (
                                        <Form onSubmit={handlePost}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value={dataPostSend.title}
                                                    placeholder="Title"
                                                    onChange={e => { setTitle(e.target.value) }}
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label>Write here your thoughts...</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={10}
                                                    placeholder="Body Text..."
                                                    value={dataPostSend.bodyText}
                                                    onChange={e => { setBodyText(e.target.value) }}
                                                />
                                            </Form.Group>
                                        </Form>
                                    ) : (
                                        <p>
                                            Please login or register first before writing a post
                                        </p>
                                    )
                                }
                            </Modal.Body>
                            <Modal.Footer>
                                {
                                    signOut === true ? (
                                        <>
                                            <Button variant="dark-outline border border-1 ps-5 pe-5 me-3" onClick={handleClose}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                                </svg>
                                            </Button>
                                            <Button variant="dark-outline border border-1 ps-5 pe-5 me-3" type="submit" onClick={handleClose}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-send-plus-fill" viewBox="0 0 16 16">
                                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                                                </svg>
                                            </Button>
                                        </>
                                    ) : (
                                        <div>

                                        </div>
                                    )
                                }
                            </Modal.Footer>
                        </Modal>
                    </Nav.Item>
                    <Nav.Item className="mt-1 fs-5">
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    );
};

export default NavAction;