import { ListaItem } from "./styled";

interface ItemListProps {
    id: number;
    name: string;
    onSelect: (id: number) => void;
}

const ItemList = ({ id, name, onSelect }: ItemListProps) => {

    const handleClick = () => {
        onSelect(id);
    };

    const formataNumero = (id: number) => {
        return id.toString().padStart(3, '0');
    };

    return (
        <ListaItem onClick={handleClick}>
            {formataNumero(id)} - {name}
        </ListaItem>
    );
};

export default ItemList;
