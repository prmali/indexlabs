import React, { useState } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

import logo from '../../IndexLabs_Colored.png';
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
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">ICO</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">Whitepaper</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">Overview</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">Roadmap</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">Sector Initiative</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Topbar;