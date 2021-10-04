import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem,
        NavbarBrand,
        Container
}from "reactstrap"
 const Heading= ()=> {
    return (
        <Navbar color="white">
            <Container>
                <NavbarBrand  href="/">
                    Мои пользыватели
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add">
                            Добавить пользывателя
                        </Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default  Heading;