import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import './styling/info.scss';
const mainImg = require('./../../assets/Main.png');
const allocationImg = require('./../../assets/token-allocation.png');

class CrowdsaleInfo extends React.Component {
    render() {
        return (
            <div className="crowdsale-container">
                <div className="sub-bar">
                    <div>
                        <span>
                            <img src={ mainImg } alt="TMX Logo" />
                            <div>
                                <h1 className="primary">Total Market Index [TMX]</h1>
                                <p className="subtext">The first tokenized, tradable index in the cryptocurrency market. 
                                The index tracks the performance and growth of the cryptocurrency market as a whole with the ability to factor in new 
                                projects arriving in the market.</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="bar">
                    <img src={ allocationImg } alt="TMX Allocation" />
                </div>
                
                <div className="sale-breaker">
                    <Container>
                        <Row md="3" sm="1" xs="1">
                            <Col className="presale-container">
                                <h1 className="primary">Presale</h1>
                                <p className="subtext">description1</p>
                                <p className="subtext">description1</p>
                                <p className="subtext">description1</p>
                            </Col>
                            <Col />
                            <Col className="crowdsale-container">
                                <h1 className="primary">Public</h1>
                                <p className="subtext">description1</p>
                                <p className="subtext">description1</p>
                                <p className="subtext">description1</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default CrowdsaleInfo;