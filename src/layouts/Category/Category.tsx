import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import EditModal from "../../components/EditModal/EditModal";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import Loading from "../../components/Utils/Loading/Loading";
import TitleCategory from "../../components/TitleCategory/TitleCategory";
import { getCards } from "../../api/api";
import CardData from "../../models/CardData";

function Category() {
  const [dataCard, setDataCard] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingCard, setEditingCard] = useState<CardData | null>(null);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getCards().then((data) => {
      setDataCard(data);
      setLoading(false);
    });
  }, []);

  const handleCardDelete = () => {
    if (cardToDelete) {
      setDataCard(dataCard.filter((card) => card.id !== cardToDelete));
      setShowModalDelete(false);
      setCardToDelete(null);
    }
  };

  const openDeleteModal = (cardId: string) => {
    setCardToDelete(cardId);
    setShowModalDelete(true);
  };

  const toggleModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  const handleCardEdit = (editedCard: CardData) => {
    const updatedData = dataCard.map((card) =>
      card.id === editedCard.id ? editedCard : card
    );
    setDataCard(updatedData);
    setEditingCard(null);
  };

  const openEditModal = (card: CardData) => {
    setEditingCard(card);
  };

  const getColorByCategory = (category: string) => {
    switch (category.toUpperCase()) {
      case "FRONTEND":
        return "#409bf1";
      case "BACKEND":
        return "#00c86f";
      case "FULLSTACK":
        return "#f24822";
      default:
        return "#ffba05";
    }
  };

  const categories = Array.from(new Set(dataCard.map((card) => card.category)));

  return (
    <div className="grid grid-cols-1 gap-10 pt-10 pb-10 md:pb-16 px-0 lg:px-14">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        categories.map((category) => {
          const color = getColorByCategory(category);
          const categoryCards = dataCard.filter(
            (card) => card.category === category
          );

          return (
            <div
              key={category}
              className="grid-flow-row justify-center h-[450px] w-full"
            >
              <TitleCategory
                title={category.toUpperCase()}
                bgColor={color}
                style={{ height: "70px", width: "432px" }}
              />
              <div className="video-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 px-5 md:px-0">
                {categoryCards.map((card) => (
                  <Card
                    id={card.id}
                    key={card.id}
                    image={card.image}
                    color={color}
                    width="380px"
                    height="218px"
                    modify={true}
                    videoUrl={card.video}
                    onDelete={() => openDeleteModal(card.id)}
                    onEdit={() => openEditModal(card)}
                  />
                ))}
              </div>
            </div>
          );
        })
      )}
      {editingCard && (
        <EditModal
          card={editingCard}
          onClose={() => setEditingCard(null)}
          onSave={handleCardEdit}
        />
      )}
      {showModalDelete && (
        <DeleteModal
          show={showModalDelete}
          onClose={toggleModalDelete}
          onDelete={handleCardDelete}
        />
      )}
    </div>
  );
}

export default Category;