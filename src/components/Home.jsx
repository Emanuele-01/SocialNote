import { Card, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import NavHome from "./NavHome";
import NavAction from "./NavAction";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {

    const dispatch = useDispatch()
    const [allPost, setAllPost] = useState([])

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkVtYW51ZWxlIFBpdG9uaSIsImlhdCI6MTUxNjIzOTAyMn0.ywBYEeT3Pm9ikR0tWtSlhDBnsTWKIRCn8V_7ww8eg9o'

    const getAllPost = () => {
        return async (dispatch) => {
            try {
                const response = await fetch('http://localhost:3001/social&note/post', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })

                const data = await response.json();

                if (response.ok) {
                    console.log(data);
                    setAllPost(data);
                }
            } catch (error) {
                console.log('error: ' + error)
            }
        }
    }

    useEffect(() => {
        dispatch(getAllPost())
    }, [dispatch])

    return (
        <Row className="justify-content-center">
            <Col xs={12}>
                <NavHome />
            </Col>

            <Col xs={10} className="card-css">
                {allPost && allPost.content && allPost.content.map((post) =>
                    <Card className="text-center mb-5" key={post.id}>
                        <Card.Header className="d-flex justify-content-between">
                            <Card.Text className="mt-2 fs-6">
                                {post.user.name}
                            </Card.Text>
                            <Card.Text>
                                <DropdownButton
                                    align="end"
                                    variant="dark-outline pt-0 pb-0 ps-3 pe-3 mt-1"
                                    title=''
                                    id="dropdown-menu-align-end"
                                    className=""
                                >
                                    <Dropdown.Item eventKey="1" className="ms-3">
                                        {<svg xmlns="http://www.w3.org/2000/svg" className="me-3 mb-1" width="18" height="18" fill="#c80d0d" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>} Delete
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="2" className="ms-3">
                                        {<svg xmlns="http://www.w3.org/2000/svg" className="me-3 mb-1" width="18" height="18" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>} Modify
                                    </Dropdown.Item>
                                </DropdownButton>
                            </Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.bodyText}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex justify-content-around p-0">
                            <Card.Text className="mt-3 textBold">
                                {post.publicationDate}
                            </Card.Text>
                            <Card.Text className="mt-3 textBold">
                                {post.city}
                            </Card.Text>
                        </Card.Footer>
                    </Card>
                )}
            </Col>

            <Col xs={12}>
                <NavAction />
            </Col>

        </Row>
    );
};

export default Home;