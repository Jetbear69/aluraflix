interface CardProps {
  id: string;
  image: string;
  width: string;
  height: string;
  color: string;
  modify: boolean;
  style?: React.CSSProperties;
  videoUrl?: string;
  className?: string;
  cardId?: string;
  onDelete?: (id: string) => void;
  onEdit: () => void;
}

export default CardProps;
