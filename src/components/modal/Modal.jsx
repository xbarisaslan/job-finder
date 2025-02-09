const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[100] text-center bg-white w-[90%] lg:w-[30%] lg:p-8 border-2 border-black"
      onClick={onClose}
    >
      <div
        className="flex flex-col justify-center h-[20rem] "
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute right-4 top-2" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
