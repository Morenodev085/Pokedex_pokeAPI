import { useEffect, useState } from "react";
import { InfoContainer } from "./styled";
import { api } from "../../services/Api";

interface PokeInfoProps {
  pokemonId: number;
}

const PokeInfo = ({ pokemonId }: PokeInfoProps) => {
  const [type, setType] = useState("");
  const [habilidade, setHabilidade] = useState("");
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (!pokemonId) return;

    const fetchPokemonInfo = async () => {
      try {
        const res = await api.get(`/pokemon/${pokemonId}`);
        const data = res.data;

        setNome(data.name);
        setType(data.types.map((t: any) => t.type.name).join(", "));
        setHabilidade(data.abilities.map((a: any) => a.ability.name).join(", "));
      } catch (error) {
        console.error("Erro ao buscar informações do Pokémon:", error);
      }
    };

    fetchPokemonInfo();
  }, [pokemonId]);

  return (
    <InfoContainer>
      <p>Nome: {nome || "Carregando..."}</p>
      <p>Tipo: {type || "Carregando..."}</p>
      <p>Habilidades: {habilidade || "Carregando..."}</p>
    </InfoContainer>
  );
};

export default PokeInfo;
