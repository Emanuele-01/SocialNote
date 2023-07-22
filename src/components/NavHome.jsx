
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { POST_USER, PRIVATE_PROFILE, SING_OUT, TOKEN_QUERY } from "../redux/action";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/reducer/logReducer";

const NavHome = () => {

    const dispatch = useDispatch();
    const navigated = useNavigate();

    const signOut = useSelector(state => state.singout.content);

    const location = useLocation();

    const singOut = () => {
        dispatch({ type: TOKEN_QUERY, payload: {} })
        dispatch({ type: PRIVATE_PROFILE, payload: { id: '' } })
        dispatch({ type: POST_USER, payload: {} })
        dispatch({ type: SING_OUT, payload: false })
        dispatch(logout())
        navigated('/')
    }

    return (
        <Navbar collapseOnSelect expand="md" className="navHome-css">
            <Container>
                <Navbar.Brand className="d-flex">
                    <Link className={`${location.pathname === '/home' ? " fs-4 me-3 nav-link text-dark active fw-bold" : "fs-5 me-2 nav-link text-dark"}`} to="/home"> SocialNote</Link>
                    <Link className={`${location.pathname === '/profile' ? "fs-4 nav-link ms-3  text-dark active fw-bold" : "fs-5 nav-link text-dark"}`} to="/profile"> Profile</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic" className=" p-1 mb-1 buttonNavHome">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdownHome">
                                {signOut === true ? (
                                    <Button variant="light" className="ps-4 pe-4  mt-1 mb-1 ms-4" onClick={singOut}>
                                        Sing Out
                                    </Button>
                                ) : (
                                    <div></div>
                                )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavHome;