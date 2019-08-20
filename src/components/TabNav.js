import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const WrapperNav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10px;
    margin-bottom: 10px;
`;

// TODO: Add missing tabs below
export default function TabNav() {
    return(
        <WrapperNav>
    <NavLink exact to="/" activeClassName="ActiveNav">Home</NavLink>
    <NavLink to="/characters" activeClassName="ActiveNav">Characters</NavLink>
    <NavLink to="/episodes" activeClassName="ActiveNav">Episodes</NavLink>
    <NavLink to="/locations" activeClassName="ActiveNav">Locations</NavLink>
        </WrapperNav>
    )
};
