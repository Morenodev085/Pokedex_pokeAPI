import { useEffect, useState } from 'react';
import { api } from '../../services/Api';
import { ContainerLista, ListaPokemon } from './styled';
import IntemList from '../ItemList';

// 👉 Tipo do Pokémon como a API envia
interface PokemonApi {
    name: string;
    url: string;
}

// 👉 Tipo do Pokémon como o app usa
interface Pokemon {
    name: string;
    url: string;
    id: number;
}

const PokeLista = ({
    onSelectPokemon,
}: {
    onSelectPokemon: (id: number) => void;
}) => {
    const [pokemon, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const res = await api.get('/pokemon?limit=151');

                const pokemonComId: Pokemon[] = res.data.results.map(
                    (poke: PokemonApi) => {
                        const idString = poke.url
                            .split('/')
                            .filter(Boolean)
                            .pop();

                        if (!idString) {
                            throw new Error('ID não encontrado na URL');
                        }

                        return {
                            name: poke.name,
                            url: poke.url,
                            id: Number(idString),
                        };
                    }
                );

                setPokemonList(pokemonComId);
            } catch (error) {
                console.error('Erro ao buscar lista de Pokemons:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonList();
    }, []);

    const handleSelectPokemon = (id: number) => {
        onSelectPokemon(id);
    };

    if (loading) {
        return <div>Carregando Pokemons...</div>;
    }

    return (
        <ContainerLista>
            <div>
                <h2>Lista de Pokemons</h2>
            </div>

            <ListaPokemon>
                {pokemon.map((poke) => (
                    <IntemList
                        key={poke.id}
                        id={poke.id}
                        name={poke.name}
                        onSelect={handleSelectPokemon}
                    />
                ))}
            </ListaPokemon>
        </ContainerLista>
    );
};

export default PokeLista;
