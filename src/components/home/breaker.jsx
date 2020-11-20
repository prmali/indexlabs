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

import telegram from "../../assets/telegram-icon.png";
import reddit from "../../assets/reddit-icon.png";
import twitter from "../../assets/twitter-icon.png";
import medium from "../../assets/medium-icon.png";
import email from "../../assets/email-icon.png";

class Breaker extends React.Component {
    render() {
        return (
            <div className="breaker">
                <Row md="3" sm="1" xs="1">
                    <Col className="guide">
                        <h1>Snapshot</h1>
                        <div className="container">
                            <span className="section sec">
                                <div className="node"><p>Q3 <br /> 2020</p></div>
                                <p className="description">Public Release</p>
                            </span>
                            <span className="section prim">
                                <div className="node"><p>Q4 <br /> 2020</p></div>
                                <p className="description">TMX<br />Distribution</p>
                            </span>
                            <span className="section sec">
                                <div className="node"><p>Q1 <br /> 2021</p></div>
                                <p className="description">Governance<br />Testing</p>
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
                            <a href="https://t.me/indexlabscommunity" target="_blank" className="media telegram">
                                <img src={ telegram } alt="telegram-logo"/>
                                <p>Telegram</p>
                            </a>
                            <a href="https://www.reddit.com/user/indexlabs" target="_blank" className="media reddit">
                                <img src={ reddit } alt="reddit-logo"/>
                                <p>Reddit</p>
                            </a>
                            <a href="https://medium.com/@indexlabs" target="_blank" className="media medium">
                                <img src={ medium } alt="medium-logo"/>
                                <p>Medium</p>
                            </a>
                            <a href="https://twitter.com/indexlabs_defi" target="_blank" className="media twitter">
                                <img src={ twitter } alt="twitter-logo"/>
                                <p>Twitter</p>
                            </a>
                            
                            <a href="mailto:contact@indexlabs.finance" target="_blank" className="media email">
                                <img src={ email } alt="email-logo"/>
                                <p>Email</p>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Breaker;