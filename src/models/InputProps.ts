interface InputProps {
    title: string;
    textValue?: string;
    placeholder: string;
    className?: string;
    type?: string;
    style?: React.CSSProperties;
    setTextValue?: (text: string) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default InputProps;