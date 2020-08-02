import React from 'react';

// Home
import Info from './home/info';
import Breaker from './home/breaker';

// Crowdsale
import CrowdsaleInfo from './crowdsale/info';

// Governance
import GovernanceInfo from './governance/governance';

// Roadmap
import RoadmapInfo from './roadmap/roadmap';


const Home = () => {
    return(
        <div>
            <Info />
            <Breaker />
        </div>
    )
}

const Crowdsale = () => {
    return(
        <div>
            <CrowdsaleInfo />
        </div>
    )
}

const Whitepaper = () => {
    return(
        <div>
            <Breaker />
        </div>
    )
}

const Roadmap = () => {
    return(
        <div>
            <RoadmapInfo />
        </div>
    )
}

const Governance = () => {
    return(
        <div>
            <GovernanceInfo />
        </div>
    )
}

const Indexes = () => {
    return(
        <div>
            <Info />
        </div>
    )
}

export {
    Home,
    Crowdsale,
    Whitepaper,
    Roadmap,
    Governance,
    Indexes
};