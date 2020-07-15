import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './styling/footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row md="3" sm="1" xs="1">
                        <Col>
                            <span><div className="format"></div><p>Resources</p></span>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink to="/">Dashboard</NavLink>
                                    <NavLink to="/">Sectors</NavLink>
                                    <NavLink to="/">Developers</NavLink>
                                    <NavLink to="/">Ethereum</NavLink>
                                    <NavLink to="/">Merch</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>

                        <Col>
                            <span><div className="format"></div><p>Plans</p></span>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink to="/">Whitepaper</NavLink>
                                    <NavLink to="/">Roadmap</NavLink>
                                    <NavLink to="/">Pre-ICO</NavLink>
                                    <NavLink to="/">ICO</NavLink>
                                    <NavLink to="/">Voting Initative</NavLink>
                                    <NavLink to="/">Future</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>

                        <Col>
                            <span><div className="format"></div><p>Policies</p></span>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink to="/">Privacy</NavLink>
                                    <NavLink to="/">Useage</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;