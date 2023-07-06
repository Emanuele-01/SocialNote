import { Button, Nav, Navbar } from "react-bootstrap";

const NavAction = () => {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="navAction-css justify-content-center">

                <Nav>
                    <Nav.Item className="me-3 mt-1 fs-5">
                        <Nav.Link>Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="me-3">
                        <Button className="bg-dark border border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>
                        </Button>
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