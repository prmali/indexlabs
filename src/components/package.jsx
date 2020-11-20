import React from 'react';

// Home
import Info from './home/info';
import Breaker from './home/breaker';

// Token Sale
//import TokensaleInfo from './tokensale/info';

// Whitepaper
import WhitepaperInfo from './whitepaper/whitepaper';

// Governance
import GovernanceInfo from './governance/governance';

// Roadmap
import RoadmapInfo from './roadmap/roadmap';

// Index
import IndexInfo from './indexes/info';

const Home = () => {
    return(
        <div>
            <Info />
            <Breaker />
        </div>
    )
}

/*
const TokenSale = () => {
    return(
        <div>
            <TokensaleInfo />
        </div>
    )
}
*/

/*
const Whitepaper = () => {
    return(
        <div>
            <WhitepaperInfo />
        </div>
    )
}
*/

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
            <IndexInfo />
        </div>
    )
}

export {
    Home,
    //TokenSale,
    Roadmap,
    Governance,
    Indexes
};