import CloseButton from "../CloseButton/CloseButton";
import ModalProps from "../../models/ModalProps";

function Modal({
    title,
    children,
    show,
    onClose,
}: ModalProps) {
    if (!show) {
        return null;
    }

    return (
        <div className="opacidad fixed inset-0 bg-blue-900 bg-opacity-70 flex justify-center items-center z-50">
            <div className="modal delete-card flex content-center flex-col w-96 lg:w-[974px] lg:h-[900px] min-h-100 p-5 rounded-2xl shadow-lg shadow-cyan-500 border-4 border-cyan-500 bg-[#03122F]">
                <div className="modal-title flex justify-between px-2 pb-6 gap-36">
                    <h1 className="text-[#2271D1] text-center text-xl md:text-2xl lg:text-5xl font-black uppercase font-Roboto flex justify-center pl-[300px] py-3">
                        {title}:
                    </h1>
                    <CloseButton onClick={onClose} color="#fff" classname="modal-close-button" />
                </div>
                <div className="flex justify-center px-2">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
