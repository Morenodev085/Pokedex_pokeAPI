import { ListaItem } from "./styled";

interface ItemListProps {
    name: string;
    url: string;
    onSelect: (id: number) => void;
}

const IntemList = ({ name, url, onSelect }: ItemListProps) => {


    const handleClick = () => {
        const id = url.split('/').filter(Boolean).pop()
        onSelect(Number(id));
    };
    return (
        <ListaItem
            onClick={handleClick}>
            {name}
        </ListaItem >
    )
}

export default IntemList