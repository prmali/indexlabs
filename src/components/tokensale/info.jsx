import React from 'react';
import {
    Container,
    Row,
    Col,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './styling/info.scss';
const mainImg = require('./../../assets/Main.png');
const allocationImg = require('./../../assets/token-allocation.png');

class TokensaleInfo extends React.Component {
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
                                The tokenized index reflects the performance and growth of the cryptocurrency market as a whole with the ability to factor in new 
                                projects arriving in the market.</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="bar">
                    <img src={ allocationImg } alt="TMX Allocation" />
                </div>
                
                <div className="sale-breaker">
                    <p className="notif">1 TMX = 1/10Bn of Total Cryptocurrency Market Cap</p>
                    <Container>
                        <Row md="2" sm="1" xs="1">
                            <Col className="presale-container">
                                <h1 className="primary">Presale</h1>
                                <p className="date">10.15.2020 - 11.20.2020</p>
                                <p className="subtext">Currencies: BTC, ETH</p>
                                <p className="subtext rate">Rates:</p>
                                <div className="rates">
                                    <p>50-99 ETH: 30% bonus</p>
                                    <p>100-199 ETH: 35% bonus</p>
                                    <p>200-499 ETH: 40% bonus</p>
                                    <p>500-5000 ETH: 45% bonus</p>
                                </div>
                                <p className="subtext dec">Contact for Presale:</p>
                                <a className="subtitle" href="mailto:contact@indexlabs.finance">contact@indexlabs.finance</a>
                            </Col>
                            <Col className="publicsale-container">
                                <h1 className="primary">Public</h1>
                                <p className="date">01.01.2021 - 03.01.2021</p>
                                <p className="subtext">Currencies: ETH</p>
                                <p className="info dec">More information will be released as we get closer to the public sale.</p>
                            </Col>
                        </Row>

                        <Col className="notice-req">
                            <p className="alert">*Required: KYC/AML and Accredited Investor Verification</p>
                            <br />
                            <p className="minor">*Terms &amp; Conditions Apply</p>
                            <hr className="brk"/>                            
                            <p className="alert">*Restricted Countries Include (not limited to): China, India, South Korea</p>
                            <br />
                        </Col>
                    </Container>
                </div>
            </div>
        );
    }
}

export default TokensaleInfo;