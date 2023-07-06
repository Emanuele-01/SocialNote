import { Col, Row } from "react-bootstrap";
import NavHome from "./NavHome";
import NavAction from "./NavAction";

const Home = () => {


    return (
        <Row>
            <Col xs={12}>
                <NavHome />
            </Col>

            <Col xs={12} className="navAction-css">
                <NavAction />
            </Col>

        </Row>
    );
};

export default Home;