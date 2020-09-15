import React from 'react';
import { 
    Container,
    Col,
    Row,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';
import './styling/info.scss';
import whitepaper from '../../assets/whitepaper.pdf';

const governanceIcon = require('../../assets/Governance-Icon.png');
const marketIcon = require('../../assets/Market-Icon.png');
const globeIcon = require('../../assets/Globe-Icon.png');

class Info extends React.Component {
    render() {
        return(
            <div className="mid">
                <div className="info-header-holder">
                    <h1>Decentralized Indexes for Cryptocurrency</h1>
                </div>
                <Container className="card-container">
                    <Row md="3" sm="1" xs="1">
                        <Col>
                            <Card>
                                <CardBody>
                                    <div className="card-title-container"><div className="format"></div><CardTitle>Crypto Indexes</CardTitle></div>
                                    <CardImg className="globeIcon" top src={ globeIcon } />
                                    <CardText>Tokenized, Tradable Indexes Brought to the World of Cryptocurrency</CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <CardBody>
                                    <div className="card-title-container"><div className="format"></div><CardTitle>Market-Based Assets</CardTitle></div>
                                    <CardImg className="marketIcon" top width="100%" src={ marketIcon } />
                                    <CardText>Index-Based Assets Built to Track and Trade the Cryptocurrency Market</CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <CardBody>
                                    <div className="card-title-container"><div className="format"></div><CardTitle>Decentralized Governance</CardTitle></div>
                                    <CardImg className="governanceIcon" top src={ governanceIcon } />
                                    <CardText>Full User Control Over Indexes With a Platform Governance Token</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div className="learnContainer">
                    <span>
                        <div className="block block1"></div>
                        <div className="block block2"></div>
                        <p>learn more</p>
                    </span>

                    <Button href={whitepaper} target="_">Whitepaper</Button>
                </div>
            </div>
        );
    }
}

export default Info;