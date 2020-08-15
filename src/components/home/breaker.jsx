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
                        <div className="container">
                            <span className="section sec">
                                <p className="date">01/01/2020</p>
                                <div className="node"></div>
                                <p className="description">Lorem Ipsum</p>
                            </span>
                            <span className="section prim">
                                <p className="date">01/01/2020</p>
                                <div className="node"></div>
                                <p className="description">Lorem Ipsum</p>
                            </span>
                            <span className="section sec">
                                <p className="date">01/01/2020</p>
                                <div className="node"></div>
                                <p className="description">Lorem Ipsum</p>
                            </span>
                        </div>
                    </Col>

                    <Col className="roadmap">
                        <h1>Roadmap</h1>
                        <div>
                            <Button tag={Link} to="/roadmap">Navigate</Button>
                        </div>
                    </Col>

                    <Col className="community">
                        <h1>Community</h1>
                        <div>
                            <span className="media telegram">
                                <p>Telegram</p>
                            </span>
                            <span className="media reddit">
                                <p>Reddit</p>
                            </span>
                            <span className="media twitter">
                                <p>Twitter</p>
                            </span>
                            <span className="media insta">
                                <p>Insta</p>
                            </span>
                            <span className="media email">
                                <p>Email</p>
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Breaker;