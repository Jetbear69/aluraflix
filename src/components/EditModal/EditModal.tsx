import React, { useState, useEffect } from "react";
import CardData from "../../models/CardData";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../Button/Button";
import IconSave from "../Utils/IconSave/IconSave";
import IconClean from "../Utils/IconClean/IconClean";
import { getCategories } from "../../api/api";
import "font-awesome/css/font-awesome.min.css";

interface EditModalProps {
  card: CardData;
  onClose: () => void;
  onSave: (editedCard: CardData) => void;
}

function CustomSelect({ categories, selectedCategory, setSelectedCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category) => {
      setSelectedCategory(category);
      setIsOpen(false);
  };

  return (
      <div className="relative">
          <div
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#03122F] border-2 border-blue-600 rounded-lg px-2 text-gray-400 font-semibold w-80 lg:w-[573px] lg:h-[55px] cursor-pointer flex justify-between items-center"
          >
              <span>{selectedCategory || "Selecciona una categoría"}</span>
              <span className="text-gray-400">
                  <i className="fas fa-chevron-down"></i>
              </span>
          </div>
          {isOpen && (
              <ul className="absolute z-10 bg-[#03122F] border-2 border-blue-600 rounded-lg w-full mt-1">
                  {categories.map((category) => (
                      <li
                          key={category.id}
                          onClick={() => handleSelect(category.name)}
                          className="px-2 py-1 text-gray-400 hover:bg-blue-600 cursor-pointer"
                      >
                          {category.name}
                      </li>
                  ))}
              </ul>
          )}
      </div>
  );
}

const EditModal: React.FC<EditModalProps> = ({ card, onClose, onSave }) => {
  const [editedCard, setEditedCard] = React.useState<CardData>(card);
  const [activeButton, setActiveButton] = React.useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState(card.category);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const handleSave = () => {
    onSave({ ...editedCard, category: selectedCategory });
  };

  const cleanInputs = () => {
    setEditedCard(card);
    setSelectedCategory(card.category);
    setActiveButton("");
  };

  return (
    <div className="fixed inset-0 bg-blue-900 bg-opacity-70 flex justify-center items-center z-50">
      <div className="modal flex content-center flex-col w-96 lg:w-[974px] lg:h-[900px] min-h-100 p-5 rounded-2xl shadow-lg shadow-cyan-500 border-4 border-cyan-500 bg-[#03122F]">
        <div className="modal-title flex justify-between px-2 pb-6 gap-36">
          <h1 className="title-mobile title-tablet text-[#2271D1] text-xl md:text-2xl lg:text-5xl font-black uppercase font-Roboto py-3 flex justify-center pl-[300px]">
            Editar Video:
          </h1>
          <CloseButton onClick={onClose} color="white" classname="modal-close-button" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col justify-center px-2 gap-2">
            <label className="text-white text-left">Título</label>
            <input
              type="text"
              value={editedCard.title}
              onChange={(e) =>
                setEditedCard({ ...editedCard, title: e.target.value })
              }
              className="bg-transparent border-2 border-blue-600 rounded-lg px-2 text-gray-400 font-semibold w-80 lg:w-[573px] lg:h-[55px] p-2 mb-4"
              placeholder="Título"
            />
          </div>
          <div className="flex flex-col justify-center px-2 gap-2">
            <label className="text-white text-left">Categoría</label>
            <CustomSelect
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <div className="flex flex-col justify-center px-2 gap-2">
            <label className="text-white text-left">Imagen</label>
            <input
              type="text"
              value={editedCard.image}
              onChange={(e) =>
                setEditedCard({ ...editedCard, image: e.target.value })
              }
              className="bg-transparent border-2 border-blue-600 rounded-lg px-2 text-gray-400 font-semibold w-80 lg:w-[573px] lg:h-[55px] p-2 mb-4"
              placeholder="Imagen"
            />
          </div>
          <div className="flex flex-col justify-center px-2 gap-2">
            <label className="text-white text-left">Video</label>
            <input
              type="text"
              value={editedCard.video}
              onChange={(e) =>
                setEditedCard({ ...editedCard, video: e.target.value })
              }
              className="bg-transparent border-2 border-blue-600 rounded-lg px-2 text-gray-400 font-semibold w-80 lg:w-[573px] lg:h-[55px] p-2 mb-4"
              placeholder="Video URL"
            />
          </div>
          <div className="flex flex-col justify-center px-2 gap-2">
            <label className="text-white text-left">Descripción</label>
            <textarea
              value={editedCard.description}
              onChange={(e) =>
                setEditedCard({ ...editedCard, description: e.target.value })
              }
              className="bg-transparent border-2 border-blue-600 rounded-lg px-2 text-gray-400 font-semibold w-80 lg:w-[573px] h-32 p-2 mb-6"
              placeholder="Descripción"
            />
          </div>
        </div>
        <div className="flex justify-center gap-44 mt-4 modal-buttons">
          <Button
            svg={<IconSave />}
            text="GUARDAR"
            isActive={activeButton === "Save"}
            onClick={handleSave}
            type="submit"
            style={{
              backgroundColor: "#000",
              color: "#2563eb",
              boxShadow: "inset 0 0 10px #2563eb",
              border: "2px solid #2563eb",
              width: "200px",
              height: "54px",
              fontSize: "20px",
            }}
          />
          <Button
            svg={<IconClean />}
            text="LIMPIAR"
            isActive={activeButton === "Clean"}
            onClick={() => {
              cleanInputs();
            }}
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;