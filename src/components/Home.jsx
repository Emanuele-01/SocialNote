import { Col, Row } from "react-bootstrap";
import NavHome from "./NavHome";
import NavAction from "./NavAction";

const Home = () => {


    return (
        <Row>
            <Col xs={12}>
                <NavHome />
            </Col>

            <Col xs={12}>
                <NavAction />
            </Col>

        </Row>
    );
};

export default Home;