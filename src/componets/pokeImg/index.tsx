import { useEffect, useState } from 'react';
import { BarLoader, BeatLoader } from 'react-spinners';
import { BtnArt, ContainerBackground, PokeArt } from './styled'
import { api } from "../../services/Api"
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";


interface PokeImgProps {
    pokemonId: number;
    pokemonName: string;
}

interface PokemonApiResponse {
    sprites: {
        front_default: string;
        back_default: string;
    }
}

const PokeImg = ({ pokemonId, pokemonName }: PokeImgProps) => {
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
                }, 2000);
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
        <>
            <ContainerBackground>
                <BtnArt onClick={handleChangeImage}>
                    <IoMdArrowDropleftCircle />
                    </BtnArt>
                {loading ? (
                    <BarLoader color="#36d7b7"  />
                ) : (
                    <PokeArt src={isFront ? frontImg : backImg}
                        isFront={isFront}
                        alt={`Imagem do ${pokemonName}`} />
                )}
                <BtnArt onClick={handleChangeImage}>
                    <IoMdArrowDroprightCircle />
                </BtnArt>
            </ContainerBackground>
        </>
    )
}

export default PokeImg