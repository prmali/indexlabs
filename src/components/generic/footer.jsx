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
import whitepaper from '../../assets/whitepaper.pdf';

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
                                    <NavLink href={whitepaper} target="_blank">Whitepaper</NavLink>
                                    <NavLink tag={Link} to="/roadmap">Roadmap</NavLink>
                                    <NavLink tag={Link} to="/tokensale">Token Sale</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>

                        <Col>
                            <span><div className="format"></div><p>Community</p></span>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink href="https://telegram.org" target="_blank">Telegram</NavLink>
                                    <NavLink href="https://reddit.com" target="_blank">Reddit</NavLink>
                                    <NavLink href="https://medium.com" target="_blank">Medium</NavLink>
                                    <NavLink href="https://twitter.com" target="_blank">Twitter</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>

                        {/* <Col>
                            <span><div className="format"></div><p>Policies</p></span>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink tag={Link} to="/">Privacy</NavLink>
                                    <NavLink tag={Link} to="/">Terms &amp; Conditions</NavLink>
                                    <NavLink tag={Link} to="/">Usage</NavLink>
                                </NavItem>
                            </Nav>
                        </Col> */}
                    </Row>
                </Container>
                <p className="copyright">&copy; 2020 Index Labs LLC, All Rights Reserved.</p>
            </div>
        );
    }
}

export default Footer;