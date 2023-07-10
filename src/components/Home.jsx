import { Card, Col, Row } from "react-bootstrap";
import NavHome from "./NavHome";
import NavAction from "./NavAction";

const Home = () => {


    return (
        <Row>
            <Col xs={12}>
                <NavHome />
            </Col>

            <Col xs={10}>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex justify-content-around">
                        <Card.Text>
                            2-10-1-2023
                        </Card.Text>
                        <Card.Text>
                            Roma
                        </Card.Text>
                    </Card.Footer>
                </Card>
            </Col>

            <Col xs={12}>
                <NavAction />
            </Col>

        </Row>
    );
};

export default Home;