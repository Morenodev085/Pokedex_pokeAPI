import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { BarraDeBotoes, BtnArt, BtnComando, ContainerBackground, ImageContainer, MainContainer, PokeArt } from './styled'
import { api } from "../../services/Api"
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";


interface PokeImgProps {
    pokemonId: number;
    pokemonName: string;
    onNextPokemon: () => void;
    onPrevPokemon: () => void;
}

interface PokemonApiResponse {
    sprites: {
        front_default: string;
        back_default: string;
    }
}

const PokeImg = ({ pokemonId, pokemonName, onNextPokemon, onPrevPokemon }: PokeImgProps) => {
    const [isFront, setIsFront] = useState(true);
    const [frontImg, setFrontImg] = useState("");
    const [backImg, setBackImg] = useState("");
    const [loading, setLoading] = useState(true)

    const validPokemonId = pokemonId > 0 ? pokemonId : 1;

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);
            try {
                const res = await api.get<PokemonApiResponse>(`/pokemon/${validPokemonId}`);
                const data = res.data;
                setFrontImg(data.sprites.front_default || '');
                setBackImg(data.sprites.back_default || '');

                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            } catch (error) {
                console.error("Error ao bucar Pokemon:", error);
                setLoading(false);
            }
        };
        fetchPokemon()
    }, [validPokemonId]);

    function handleChangeImage() {
        setIsFront(prev => !prev);
    }

    return (
        <MainContainer>
            <ContainerBackground>
                <BtnArt onClick={handleChangeImage}>
                    <IoMdArrowDropleftCircle />
                </BtnArt>
                <ImageContainer>
                    {loading ? (
                        <BarLoader color="#36d7b7" />
                    ) : (
                        <PokeArt src={isFront ? frontImg : backImg}
                            isFront={isFront}
                            alt={`Imagem do ${pokemonName}`} />
                    )}
                </ImageContainer>
                <BtnArt onClick={handleChangeImage}>
                    <IoMdArrowDroprightCircle />
                </BtnArt>
            </ContainerBackground>
            <BarraDeBotoes>
                <BtnComando onClick={onPrevPokemon} disabled={pokemonId <= 1}>Anterior</BtnComando>
                <BtnComando onClick={onNextPokemon}>Proximo</BtnComando>
            </BarraDeBotoes>
        </MainContainer>
    )
}

export default PokeImg