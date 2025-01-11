interface ButtonProps {
    svg: JSX.Element;
    text: string;
    isActive: boolean;
    onClick?: () => void;
    type?: "button" | "submit";
    style?: React.CSSProperties;
    className?: string;
}

export default ButtonProps;