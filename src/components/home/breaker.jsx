import React from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';

import './styling/breaker.scss';

class Breaker extends React.Component {
    render() {
        return (
            <div className="breaker">
                <Row md="3" sm="1" xs="1">
                    <Col className="guide">
                        <h1>Guide</h1>
                    </Col>

                    <Col className="roadmap">
                        <h1>Roadmap</h1>
                        <div>
                            <Button tag={Link} to="/Roadmap">Navigate</Button>
                        </div>
                    </Col>

                    <Col className="community">
                        <h1>Community</h1>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Breaker;