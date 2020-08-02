import React from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';
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
                                    <NavLink tag={Link} to="/governance">Governance</NavLink>
                                    <NavLink tag={Link} to="/indexes">Indexes</NavLink>
                                    <NavLink href="https://ethereum.org" target="_blank">Ethereum</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>

                        <Col>
                            <span><div className="format"></div><p>Plans</p></span>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink tag={Link} to="/whitepaper">Whitepaper</NavLink>
                                    <NavLink tag={Link} to="/roadmap">Roadmap</NavLink>
                                    <NavLink tag={Link} to="/crowdsale">Crowdsale</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>

                        <Col>
                            <span><div className="format"></div><p>Policies</p></span>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink tag={Link} to="/">Privacy</NavLink>
                                    {/* <NavLink tag={Link} to="/">Usage</NavLink> */}
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