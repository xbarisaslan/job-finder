"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Modal from "@/components/modal/Modal";
import LoginForm from "@/components/loginForm/LoginForm";
import RegisterForm from "@/components/registerForm/RegisterForm";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("login");
  const pathname = usePathname();

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex items-center justify-between border-b-2 p-2 lg:py-5 lg:px-9 border-black">
      <Link href="/" className="text-2xl font-semibold">
        ACME
      </Link>

      <div className="flex items-center gap-3">
        <button
          onClick={() => openModal("login")}
          className="border-2 border-black px-4 py-0.5 font-medium"
        >
          {pathname === "/jobs" ? "Job List" : "Login"}
        </button>
        <button
          onClick={() => openModal("register")}
          className="border-2 border-black px-4 py-0.5 font-medium"
        >
          {pathname === "/jobs" ? "Logout" : "Sign Up"}
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent === "login" ? (
          <LoginForm onSignUpClick={() => setModalContent("register")} />
        ) : (
          <RegisterForm onLoginClick={() => setModalContent("login")} />
        )}
      </Modal>
    </div>
  );
};

export default Navbar;
