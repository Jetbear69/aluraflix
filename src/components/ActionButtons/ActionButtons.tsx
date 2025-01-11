import { useState } from "react";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import ActionButtonsProps from "../../models/ActionButtonsProps";
import { deleteCard } from "../../api/api";
import DeleteModal from "../DeleteModal/DeleteModal";

function ActionButtons({
  borderColor,
  cardId,
  onDelete,
  onEdit,
  card,
  width,
  height,
}: ActionButtonsProps) {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleDeleteCard = async () => {
    try {
      if (cardId) {
        await deleteCard(cardId);
        onDelete?.(cardId);
      } else {
        return;
      }
    } catch (error) {
      console.error("Error deleting card", error);
      alert("Error al eliminar la card");
    }
  };

  const toggleModal = () => {
    setShowModalEdit(!showModalEdit);
  };

  const toggleModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  return (
    <>
      <div
        className="action-buttons flex gap-14 px-10 lg:gap-16 lg:px-8 py-2 bg-dark justify-center rounded-b-2xl font-bold border-4 items-center"
        style={{
          borderColor: borderColor,
          boxShadow: `0 0 1.2rem ${borderColor}`,
          width: width,
          maxWidth: "380px",
          height: "auto",
          maxHeight: height,
        }}
      >
        <a
          className="flex gap-2 hover:text-green-400 cursor-pointer"
          onClick={() => onEdit?.(card)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-edit"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" />
          </svg>
          <p>Editar</p>
        </a>
        <a
          className="flex gap-2 hover:text-red-400 cursor-pointer"
          onClick={toggleModalDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
          <p>Eliminar</p>
        </a>
      </div>

      {showModalEdit && (
        <Modal
          show={showModalEdit}
          title="Editar Card"
          children={
            <div>
              <Form cardId={cardId} edit />
            </div>
          }
          onClose={toggleModal}
          bgColor="#192e52"
          borderColor="#96d2fa"
        />
      )}

      {showModalDelete && (
        <DeleteModal
          show={showModalDelete}
          onClose={toggleModalDelete}
          onDelete={handleDeleteCard}
        />
      )}
    </>
  );
}

export default ActionButtons;