export interface PokemonApiResponse{
    id: number;
    name: string;
    sprites:{
        front_default: string;
        back_default: string
        front_shiny: string
        back_shiny: string
    }
    types:{
        slot: number;
        type:{
            name:string
        }
    }[];
}

export interface Pokemon {
    id: number;
    name:string;
    image: string
    type:string[];
}