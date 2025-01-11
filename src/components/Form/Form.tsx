import Button from "../Button/Button";
import IconSave from "../Utils/IconSave/IconSave";
import IconClean from "../Utils/IconClean/IconClean";
import Input from "../Input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import CardData from "../../models/CardData";
import CategoryData from "../../models/CategoryData";
import FormProps from "../../models/FormProps";
import { getCards, postCard, putCard, getCategories } from "../../api/api";
import { v4 as uuidv4 } from "uuid";
import "font-awesome/css/font-awesome.min.css";

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
                className="bg-[#03122F] border-2 border-blue-600 rounded-lg px-2 text-gray-400 font-semibold w-80 lg:w-[573px] lg:h-[55px] cursor-pointer flex justify-between"
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

function Form({ edit, cardId }: FormProps) {
    const [activeButton, setActiveButton] = useState("");
    const activateButton = (buttonName: string) => setActiveButton(buttonName);
    const [dataCard, setDataCard] = useState([]);
    const [categories, setCategories] = useState<CategoryData[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<FieldValues>();

    useEffect(() => {
        if (edit && cardId) {
            const card = dataCard.find((card: CardData) => card.id === cardId);
            if (card) {
                Object.keys(card).forEach((key) => {
                    setValue(key, card[key]);
                });
            }
        } else {
            cleanInputs();
        }
    }, [edit, cardId, dataCard, setValue]);

    useEffect(() => {
        getCards().then((data) => setDataCard(data));
        getCategories().then((data) => setCategories(data));
    }, []);

    const getDataCards = async () => {
        try {
            const dataCard = await getCards();
            setDataCard(dataCard);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        try {
            const newData = {
                id: edit && cardId ? cardId : uuidv4(),
                title: data.title,
                category: selectedCategory,
                image: data.image,
                video: data.video,
                description: data.description,
            };

            if (edit && cardId) {
                await putCard(cardId, newData);
            } else {
                await postCard(newData);
            }
            window.location.reload();
            reset();
            getDataCards();
        } catch (error) {
            console.error("Error submitting data", error);
            alert("Error en la creación de la card");
        }
    };

    const cleanInputs = () => {
        if (cardId) {
            activateButton("Clean");
        }
        reset();
        setSelectedCategory("");
    };

    return (
        <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <Input
                    title="Titulo"
                    {...register("title", { required: "Por favor ingresa el título" })}
                    placeholder="Ingrese el título"
                />
                {errors.title && typeof errors.title.message === "string" && (
                    <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}

                <label className="font-SourceCodePro py-3">Categoría</label>
                <CustomSelect
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                {errors.category && typeof errors.category.message === "string" && (
                    <p className="text-red-500 text-sm">{errors.category.message}</p>
                )}

                <Input
                    title="Imagen"
                    {...register("image", {
                        required: "Por favor ingresa la URL de la imagen",
                    })}
                    placeholder="Ingrese la URL de la imagen"
                />
                {errors.image && typeof errors.image.message === "string" && (
                    <p className="text-red-500 text-sm">{errors.image.message}</p>
                )}

                <Input
                    title="Video"
                    {...register("video", {
                        required: "Por favor ingresa la URL del video",
                    })}
                    placeholder="Ingrese la URL del video"
                />
                {errors.video && typeof errors.video.message === "string" && (
                    <p className="text-red-500 text-sm">{errors.video.message}</p>
                )}

                <Input
                    title="Descripción"
                    {...register("description", {
                        required: "Por favor ingresa la descripción",
                    })}
                    placeholder="Ingrese la descripción"
                    type="textarea"
                    className="h-32 bg-[#03122F] rounded-lg px-2 text-gray-400 border-2 border-blue-600 font-semibold w-80 lg:w-[573px] pb-16 break-words scrollbar-hidden" 
                />
                {errors.description &&
                    typeof errors.description.message === "string" && (
                        <p className="text-red-500 text-sm">{errors.description.message}</p>
                    )}
            </div>

            <div className="modal-buttons flex justify-between gap-10">
                <Button
                    svg={<IconSave />}
                    text="GUARDAR"
                    isActive={activeButton === "Save"}
                    onClick={handleSubmit(onSubmit)}
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
        </form>
    );
}

export default Form;
