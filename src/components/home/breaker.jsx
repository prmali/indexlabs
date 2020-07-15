import React from 'react';
import { 
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

import './styling/breaker.scss';

class Breaker extends React.Component {
    render() {
        return (
            <div className="breaker">
                <Row md="3" sm="1" xs="1">
                    <Col className="roadmap">
                    
                    </Col>

                    <Col className="whitepaper">
                    
                    </Col>

                    <Col className="socials">
                    
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Breaker;