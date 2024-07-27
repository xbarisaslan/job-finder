const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[100] text-center bg-white"
      onClick={onClose}
    >
      <div
        class="flex flex-col justify-center w-[40rem] h-[20rem] border-2 border-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button class="absolute right-4 top-2" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
