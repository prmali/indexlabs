import React from 'react';
import './styling/roadmap.scss';

const roadmap = require('./../../assets/roadmap-image.png');

class RoadmapInfo extends React.Component {
    render() {
        return (
            <div className="roadmap-container">
                <img src={ roadmap } alt="Roadmap Image"/>
            </div>
        )
    }
}

export default RoadmapInfo;