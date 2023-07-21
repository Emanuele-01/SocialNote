import { Card, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import NavHome from "./NavHome";
import NavAction from "./NavAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/action";

const Home = () => {

    const dispatch = useDispatch()
    const [allPost, setAllPost] = useState([])

    const access = useSelector(state => state.token.content);


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

    const handleDeletePost = async (postId) => {
        dispatch(deletePost(postId, access.accessToken));
    };
    return (
        <Row className="justify-content-center">
            <Col xs={12}>
                <NavHome />
            </Col>

            <Col xs={10} className="card-css">
                {allPost && allPost.content && allPost.content.map((post) =>
                    <Card className="text-center mb-5 cardHome-css" key={post.id}>
                        <Card.Header className="d-flex justify-content-between cardHeader">
                            <Card.Text className="mt-2 fs-6 title-css">
                                {post.user.username}
                            </Card.Text>
                            <Card.Text className="mt-2">
                                <DropdownButton
                                    align="end"
                                    variant="dark-outline pt-0 pb-0 ps-3 pe-3"
                                    title=''
                                    id="dropdown-menu-align-end"
                                >
                                    <Dropdown.Item eventKey="1" className="ps-5" onClick={() => handleDeletePost(post.id)}>
                                        {<svg xmlns="http://www.w3.org/2000/svg" className="me-3 mb-1" width="18" height="18" fill="#c80d0d" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>} Delete
                                    </Dropdown.Item>
                                </DropdownButton>
                            </Card.Text>
                        </Card.Header>
                        <Card.Body className="cardBody">
                            <Card.Title className="title-css fs-4">{post.title}</Card.Title>
                            <Card.Text className="paragraphHome-css">
                                {post.bodyText}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex justify-content-around p-0 cardFooter">
                            <Card.Text className="mt-3 paragraph-css">
                                {post.publicationDate}
                            </Card.Text>
                            <Card.Text className="mt-3 paragraph-css">
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