import CardData from "./CardData";

interface ActionButtonsProps {
  borderColor: string;
  cardId: string;
  onDelete?: (id: string) => void;
  onEdit?: (card: CardData) => void;
  card: CardData;
  width?: string;
  height?: string;
}

export default ActionButtonsProps;
