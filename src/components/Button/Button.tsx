import ButtonProps from "../../models/ButtonProps";

function Button({ svg, text, isActive, onClick, type, style }: ButtonProps) {
  const activeStyle = {
    backgroundColor: "#000",
    color: "#2563eb",
    boxShadow: "inset 0 0 10px #2563eb",
    border: "2px solid #2563eb",
    width: "200px",
    height: "54px",
    fontSize: "20px",
  };

  const defaultStyles = {
    backgroundColor: "transparent",
    color: "inherit",
    border: "2px solid #ccc",
    width: "200px",
    height: "54px",
    fontSize: "20px",
  };

  return (
    <button
      style={
        isActive ? { ...activeStyle, ...style } : { ...defaultStyles, ...style }
      }
      className={`button-alura ${
        isActive ? "active border-tertiary" : "inactive"
      } flex justify-center items-center content-center gap-4 text-gray-300 border-none md:border-0 lg:border-0 hover:text-white px-3 md:px-6 py-1 rounded-lg font-bold text-lg font-SourceSansPro`}
      onClick={onClick}
      type={type}
    >
      {svg}
      <span className={`button-text ${isActive ? "active" : "inactive"}`}>
        {text}
      </span>
    </button>
  );
}

export default Button;
