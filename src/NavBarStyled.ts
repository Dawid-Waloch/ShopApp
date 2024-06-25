import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
    background-color: black;
    padding: 1rem;
    width: 100%; 
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`
export const ListWrapper = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
`

export const ListElements = styled.li`
    margin: 0 1rem;
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    display: flex;
    align-items: center;

    &:hover {
        color: gray;
    }

    svg {
        margin-right: 8px;
    }
`