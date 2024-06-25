import styled from "styled-components";
import { Link } from "react-router-dom"

export const PageNotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 98vh;
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 20px;

    &:hover {
        color: gray;
    }
`

