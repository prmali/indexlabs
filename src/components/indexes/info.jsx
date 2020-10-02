

import React from 'react';
import './styling/info.scss';

class IndexInfo extends React.Component {
    render() {
        return (
            <div className="indexes-container">
                <h1>Total Market Index</h1>
                <h2>
                    The Total Market Index is the first tokenized, tradable index in the cryptocurrency market. 
                    It is an Adaptive Market Index designed to track the performance and growth of the cryptocurrency market as a whole. 
                    The index continually factors in new cryptocurrencies that arrive to the market to account for the ever-evolving nature 
                    of the cryptocurrency world.
                </h2>
                <br />
                <h1>Adaptive Sector Indexes</h1>
                <h2>
                Adaptive Sector Crypto Indexes allow for the active management of a group of cryptocurrencies designated to track the 
                performance of a specific market sector. The indexes will be tokenized to allow for the trading and ownership of the index. 
                The group of underlying assets can be changed without impacting the price of the token due to its ability to keep the index unit 
                value stable despite changes to the index composition. A platform governance token will be utilized to decentralize the 
                decision-making for the creation and management of Adaptive Sector Crypto Indexes.
                </h2>
            </div>
        )
    }
}

export default IndexInfo;