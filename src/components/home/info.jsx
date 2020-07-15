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
    CardSubtitle,
    Button,
} from 'reactstrap';
import './styling/info.scss';

class Info extends React.Component {
    render() {
        return(
            <div className="mid">
                <h2>We are an</h2>
                <h1>Ecosystem</h1>
                <Container className="card-container">
                    <Row md="3" sm="1" xs="1">
                        <Col>
                            <Card>
                                <CardBody>
                                    <span><div className="format"></div><CardTitle>Index Linking</CardTitle></span>
                                    <CardSubtitle>Sector Creation</CardSubtitle>
                                    <CardImg top width="100%" src="/assets/318x180.svg" />
                                    <CardText>Simple description covering base details regarding the header</CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <CardBody>
                                    <span><div className="format"></div><CardTitle>Community Driven</CardTitle></span>
                                    <CardSubtitle>Sector Creation</CardSubtitle>
                                    <CardImg top width="100%" src="/assets/318x180.svg" />
                                    <CardText>Simple description covering base details regarding the header</CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <CardBody>
                                    <span><div className="format"></div><CardTitle>Community Driven</CardTitle></span>
                                    <CardSubtitle>Sector Creation</CardSubtitle>
                                    <CardImg top width="100%" src="/assets/318x180.svg" />
                                    <CardText>Simple description covering base details regarding the header</CardText>
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
                </div>

                <Button>Whitepaper</Button>
            </div>
        );
    }
}

export default Info;