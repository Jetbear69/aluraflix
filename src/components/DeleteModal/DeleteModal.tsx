import React from "react";
import ReactDOM from "react-dom";
import CloseButton from "../CloseButton/CloseButton";

interface DeleteModalProps {
    show: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ show, onClose, onDelete }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-blue-900 bg-opacity-70 flex justify-center items-center z-50">
            <div className="flex modal-delete content-center flex-col w-96 lg:w-[974px] lg:h-[900px] min-h-100 p-5 rounded-2xl shadow-lg shadow-cyan-500 border-4 border-cyan-500 bg-[#03122F]">
                <div className="flex justify-between px-2 pb-6 gap-36">
                    <h1 className="modal-title  text-[#2271D1] text-center text-xl md:text-2xl lg:text-5xl font-black uppercase font-Roboto flex justify-center py-3">
                        Eliminar Card:
                    </h1>
                    <CloseButton onClick={onClose} color="#fff" classname="modal-close-button" />
                </div>
                <div className="flex flex-col gap-10 py-5 text-lg text-center font-Roboto">
                    <p>¿Estás seguro de que deseas eliminar esta card?</p>
                    <div className="flex gap-10 justify-center font-semibold">
                        <button
                            className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600"
                            onClick={onDelete}
                        >
                            Eliminar
                        </button>
                        <button
                            className="bg-white text-zinc-900 px-5 py-2 rounded-full hover:bg-gray-300"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body // Renderiza el modal directamente en el body
    );
};

export default DeleteModal;