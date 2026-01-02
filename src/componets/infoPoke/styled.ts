import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;

  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  /* Celulares pequenos */
  @media (max-width: 360px) {
    max-width: 100%;
    height: auto;
    padding: 12px;
  }
`;
