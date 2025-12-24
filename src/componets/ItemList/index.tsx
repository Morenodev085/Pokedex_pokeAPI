import { ListaItem } from "./styled";

interface ItemListProps {
    name: string;
    url: string;
    onSelect: (id: number) => void;
}

const IntemList = ({ name, url, onSelect }: ItemListProps) => {

    const id = url.split('/').filter(Boolean).pop()

    const handleClick = () => {
        onSelect(Number(id));
    };

    const formataNumero = (id: number) => {
        return id.toString().padStart(3, '0');
    }
    return (
        <ListaItem
            onClick={handleClick}>
            {formataNumero(Number(id))}-{name}
        </ListaItem >
    )
}

export default IntemList