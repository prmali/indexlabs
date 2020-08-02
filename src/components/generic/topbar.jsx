import React, { useState } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';

import logo from '../../Logo.png';
import './styling/topbar.scss';

const Topbar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <div class="topbar">
            <Navbar color="faded" light fixed expand="md">
                <NavbarBrand><img src={ logo } alt="IndexLabs Logo"/></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={collapsed} navbar>
                    <Nav className="ml-auto nav-item-container" pullRight navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/crowdsale">Crowdsale</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/whitepaper">Whitepaper</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/roadmap">Roadmap</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/indexes">Indexes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/governance">Governance</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Topbar;