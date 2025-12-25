import styled from "styled-components";

export const NavBar = styled.div`
    width: 100%;
    height: 60px;
    background-color: #ee4444ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    border-bottom-left-radius: 15px ;
    border-bottom-right-radius: 15px ;
    border-top-right-radius: 15px ;
`

export const Titulo = styled.h1`
    color: white;
    margin-left: 20px;
    `;

export const Menu = styled.div`
    ul {
        list-style: none;
        display: flex;
        margin-right: 20px;
    }
    li {
        margin-left: 20px;
    }
    a{
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
`