import { useEffect, useState } from 'react';
import { api } from '../../services/Api';
import { ContainerLista, ListaPokemon } from './styled';
import IntemList from '../ItemList';


interface Pokemon {
    name: string;
    url: string;
}

const PokeLista = ({ onSelectPokemon }: { onSelectPokemon: (id: number) => void }) => {
    const [pokemon, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const res = await api.get(`/pokemon?limit=20`);
                setPokemonList(res.data.results);
            } catch (error) {
                console.error("Erro ao buscar lista de Pokemons:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemonList();
    }, []);

    const handleSelectPokemon = (id: number) => {
        onSelectPokemon(id);
    }

    if (loading) {
        return <div>Carregando Pokemons...</div>
    }

    return (
        <ContainerLista>
            <div>
                <h2>Lista de Pokemons</h2>
            </div>
            {/* Lista que sera mapeada */}
            <div>
                <ListaPokemon>
                    {pokemon.map((poke) => (
                        <IntemList
                            key={poke.url}
                            onSelect={handleSelectPokemon}
                            url={poke.url}
                            name={poke.name}
                        >
                        </IntemList>
                    ))}
                </ListaPokemon>
            </div>
        </ContainerLista>
    )
}

export default PokeLista


