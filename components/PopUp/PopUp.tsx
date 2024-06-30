import React from "react";
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import "./custombuttom.css"

const PopUp: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <Modal dismissible show={showModal} onClose={() => setShowModal(false)}>
      <div className="overlay" onClick={() => setShowModal(false)} />
      <Modal.Body
        style={{
          backgroundColor: "#102a74",
          color: "#fff",
          fontFamily: "Kanit, sans-serif",
          fontWeight: 300,
          padding: "1rem",
          marginTop: "6rem",
          borderRadius: "10px",
        }}
      >
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-blue-500 dark:text-blue-300" />
          <h2 style={{fontSize:'40px'}}className="mb-5 text-lg font-normal text-white dark:text-gray-400">
            Precisa ligar agora?
          </h2>
          <h3 className="mb-5 text-lg font-normal text-white dark:text-gray-400">
            Atendemos Lisboa , Cascais , Oeiras , Sintra e Margem Sul
            <br/>
            24 HORAS  
          </h3>
      
          <p className="text-gray-600 dark:text-gray-300">
            Se você precisa de assistência imediata, entre em contato conosco pelo WhatsApp.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              className="custom-buttom-red bg-white text-blue-500 hover:text-blue-600 px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
              style={{ marginBottom: "5px", marginRight: "3px" }}
            >
              Não, obrigado
            </Button>
            <a
              href="https://wa.me/message/SXGUDW4HN3U4J1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                  className="custom-button-green text-blue-500 hover:text-blue-600 px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                <FaWhatsapp className="mr-2" /> Sim, ligar agora
              </Button>
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PopUp;