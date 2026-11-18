const Modal = ({ show, onClose, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0ab8] z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <p className="text-lg text-center mb-4">{message}</p>
        <button
          onClick={onClose}
          className="block mx-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Закрити
        </button>
      </div>
    </div>
  );
};

export default Modal;
