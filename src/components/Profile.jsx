import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import image2 from "../assets/SN-Logo.png";
import NavHome from "./NavHome";

const Profile = () => {
    const profile = useSelector(state => state.profile.content);
    const signOut = useSelector(state => state.singout.content);
    return (
        <>
            <Row>
                <Col xs={12}>
                    <NavHome />
                </Col>
            </Row>

            {signOut === true ? (
                <Row className="justify-content-center">
                    <Col xs={10} className="mt-5">
                        <Container className="containerProfile-css p-5  mt-5">
                            <Card className="mt-5 container">
                                <Container className="image-css">
                                    <Card.Img src={image2} alt="SocialNote brand-logo" />
                                </Container>
                                <Card.Body className="container-body">
                                    <Container>
                                        <Row className="justify-content-center">
                                            <Col xs={4}>
                                                <Card.Title className="text-center paragraphProfile-css mt-3">Name:</Card.Title>
                                            </Col>
                                            <Col xs={4}>
                                                <Card.Title className="title-css text-center  mt-3">{profile.name}</Card.Title>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container>
                                        <Row className="justify-content-center">
                                            <Col xs={4}>
                                                <Card.Title className="text-center paragraphProfile-css mt-3">Lastname:</Card.Title>
                                            </Col>
                                            <Col xs={4}>
                                                <Card.Title className="title-css text-center  mt-3">{profile.lastName}</Card.Title>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container>
                                        <Row className="justify-content-center">
                                            <Col xs={4}>
                                                <Card.Title className="text-center paragraphProfile-css mt-3">Username:</Card.Title>
                                            </Col>
                                            <Col xs={4} >
                                                <Card.Title className="title-css text-center mt-3">{profile.username}</Card.Title>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>

                        </Container>
                    </Col>
                </Row >
            ) : (
                <Row className="justify-content-center">
                    <Col xs={10} className="mt-4">
                        <Card>
                            <Card.Body>
                                <Placeholder as={Card.Title} animation="glow" className="mb-5">
                                    <Placeholder xs={8} />
                                </Placeholder>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={6} /> {'  '} <Placeholder xs={5} />
                                    <Placeholder xs={6} /> {'  '}<Placeholder xs={5} />
                                    <Placeholder xs={10} />
                                </Placeholder>
                            </Card.Body>
                        </Card >
                    </Col >
                </Row >
            )

            }
        </>
    );
};

export default Profile;