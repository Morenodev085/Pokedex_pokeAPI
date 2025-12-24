import styled from "styled-components";

export const ContainerLista = styled.div`
    height: 500px;
    width: 550px;
    background-color: #ffff;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
    width: 90%;       /* largura responsiva */
    height: 400px;      /* menor altura */
    padding: 0 8px;     /* evita estourar a tela */}
    `;


export const ListaPokemon = styled.ul`
    overflow-y: auto;
    height: 400px;
    padding: 0;

    @media (max-width: 768px) {
    width: 90%;       /* largura responsiva */
    height: 300px;      /* menor altura */
    padding: 0 8px;     /* evita estourar a tela */
  }
`