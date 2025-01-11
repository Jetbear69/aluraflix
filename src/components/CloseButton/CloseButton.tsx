import CloseButtonProps from "../../models/CloseButtonProps";

function CloseButton({ onClick, color }: CloseButtonProps) {
    return (
        <button onClick={onClick}>
            <svg  xmlns="http://www.w3.org/2000/svg"width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke={`${color}`}  strokeWidth="3"  strokeLinecap="round"  strokeLinejoin="round"  className=" icon icon-tabler icons-tabler-outline icon-tabler-x hover:stroke-red-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </button>
    );
}

export default CloseButton;