import styled from "styled-components";
import Pokebola from "../../assets/pokemon.webp"

export const ContainerBackground = styled.div`
  height: 300px;
  width: 300px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${Pokebola}); 
  background-size: contain;
  background-position: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const PokeArt = styled.img<{isFront: boolean}>`
  width: 170px;
  height: 170px;
  flex-shrink: 0;
  transition: transform 0.5s ease-in-out;
  transform: ${props => (props.isFront ? 'rotateY(0deg)' : 'rotateY(180deg)')};
`

export const BtnArt = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2.5rem;
  flex-shrink: 0;
`