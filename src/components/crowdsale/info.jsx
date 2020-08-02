import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import './styling/info.scss';
const mainImg = require('./../../Main.png');

class CrowdsaleInfo extends React.Component {
    render() {
        return (
            <div className="crowdsale-container">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="primary">Presale</h1>
                            <p className="subtext">08/01/2020 - 10/25/2020</p>
                            <p className="primary">0.05 ETH / 1 TMX</p>
                        </Col>

                        <Col>
                            <h1 className="primary">Public</h1>
                            <p className="subtext">11/25/2020 - 02/25/2021</p>
                            <p className="primary">0.07 ETH / 1 TMX</p>
                        </Col>
                    </Row>
                </Container>
                <h1 className="crowdsale-heading">Crowdsale Allocation</h1>
                <div className="bar">
                    <span className="presale">
                        <p className="location-desc">Presale</p>
                        <div className="amount">
                            <p>200000 TMX</p>
                        </div>
                    </span>
                    <span className="softcap">
                        <p className="location-desc">Softcap</p>
                        <div className="amount">
                            <p>1500000 TMX</p>
                        </div>
                    </span>
                    <span className="hardcap">
                        <p className="location-desc">Hardcap</p>
                        <div className="amount">
                            <p>2500000 TMX</p>
                        </div>
                    </span>
                    <span className="remaining-supply">
                        <p className="location-desc">Remaining Supply</p>
                        <div className="amount">
                            <p>5000000 TMX</p>
                        </div>
                    </span>
                </div>
                <div className="sub-bar">
                    <div>
                        <span>
                            <img src={ mainImg } alt="TMX Logo" />
                            <div>
                                <h1 className="primary">Total Market Index [TMX]</h1>
                                <p className="subtext">Represents the index of the total cryptocurrency market cap</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="sale-breaker">
                    <Container>
                        <Row>
                            <Col className="presale-container">
                                <h1 className="primary">Presale</h1>
                                <p className="subtext">description1</p>
                                <p className="subtext">description1</p>
                                <p className="subtext">description1</p>
                            </Col>
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