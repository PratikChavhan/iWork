import {NavLink as ReactLink} from 'react-router-dom'
import { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText,} from 'reactstrap';
const CustomNavbar=()=>{
    const [isOpen,SetIsOpen]=useState(false)
    return(

        
        <div>
        <Navbar color="warning"
        dark
        expand="md"
        fixed=""
        >
          <NavbarBrand tag={ReactLink} to="/">Iwork</NavbarBrand>
          <NavbarToggler onClick={()=>SetIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                    <NavLink tag={ReactLink} to="/about">
                    About
                    </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/signup">
                  Signup
                </NavLink>
              </NavItem>

                
             
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={ReactLink} to="/services">Services</DropdownItem>
                  <DropdownItem>Contact us</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>GET More</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
};

export default CustomNavbar