import ActionButtons from "../ActionButtons/ActionButtons";
import CardProps from "../../models/CardProps";

function Card({
  id,
  image,
  width,
  height,
  color,
  modify,
  videoUrl,
  onDelete,
  onEdit,
}: CardProps) {
  const handleClickVideo = () => {
    window.open(videoUrl, "_blank");
  };

  return (
    <div className="card flex flex-col items-center">
      <button onClick={handleClickVideo}>
        <img
          className="cursor-pointer border-4 rounded-t-2xl"
          src={image}
          alt="Card"
          style={{
            borderColor: color,
            boxShadow: `0 0 1.2rem ${color}`,
            width: "100%",
            height: "auto",
            maxWidth: width,
            maxHeight: height,
          }}
        />
      </button>
      <div className="action-buttons flex justify-center gap-2 w-full">
        {modify && (
          <ActionButtons
            borderColor={color}
            cardId={id}
            onDelete={onDelete}
            onEdit={onEdit}
            card={Card}
            height={height}
            className="action-buttons"
          />
        )}
      </div>
    </div>
  );
}

export default Card;
