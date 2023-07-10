import { Card, Col, Row } from "react-bootstrap";
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
                        <Card.Header>{post.user.name}</Card.Header>
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