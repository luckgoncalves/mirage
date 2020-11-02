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
import mirageLogo from '../../assets/image/mirage-logo.svg'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor: '#2BCC3B'}} light expand="md">
        <NavbarBrand to="/"><img src={mirageLogo} alt="Mirage" />mirage</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/paper">Paper</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Nova Composição</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Minhas Composições</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Configurações</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;