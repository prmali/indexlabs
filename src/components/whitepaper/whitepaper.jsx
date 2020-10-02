import React from 'react';
const pdf = require('./../../assets/whitepaper.pdf');

class WhitepaperInfo extends React.Component {
    render() {
        return(
            <embed src = {pdf} width="600px" height="1800px" />
        )
    }
}

export default WhitepaperInfo;