"use client";

import Modal from "@/components/modal/Modal";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex items-center justify-between border-b-2 py-5 px-9 border-black">
      <h6 className="text-2xl font-semibold">ACME</h6>

      <div className="flex items-center gap-3">
        <button
          onClick={openModal}
          className="border-2 border-black px-4 py-0.5 font-medium"
        >
          {pathname === "/jobs" ? "Job List" : "Login"}
        </button>
        <button
          onClick={openModal}
          className="border-2 border-black px-4 py-0.5 font-medium"
        >
          {pathname === "/jobs" ? "Logout" : "Sign Up"}
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content inside the modal.</p>
      </Modal>
    </div>
  );
};

export default Navbar;
