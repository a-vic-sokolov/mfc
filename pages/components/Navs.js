import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import News from "../news";

export const Navs = () =>{
    return(
        <Navbar  className={'menu_main'}>
            <Navbar.Brand href="#home"><span className={'logo_up'}>МСЦ</span> <br/> <span className={'logo_down'}>Апатиты</span></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/news">О центре</Nav.Link>
                <Nav.Link href="#features">Направление работы</Nav.Link>
                <Nav.Link href="#pricing">Календарь событий</Nav.Link>
                <Nav.Link href="#home">Контакты</Nav.Link>
                <NavDropdown title="Документы" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Navbar.Toggle />
            
        </Navbar>
    )
}