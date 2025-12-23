import styled, { createGlobalStyle } from 'styled-components';

 export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f5f5f5;
        color: #333;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
    }
`;

export const ContainerCentralizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  background-color: beige;
  border: 2px solid #ccc;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;