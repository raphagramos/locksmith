import React from "react";
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./custombuttom.css";
import {StyledButtonDesktop,StyledButtonMobile} from "./PopUpStyles.tsx"
const PopUp: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const { t } = useTranslation();

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
          <h2 style={{ fontSize: '40px' }} className="mb-5 text-lg font-normal text-white dark:text-gray-400">
            {t('popUp.title')}
          </h2>
          <h3 className="mb-5 text-lg font-normal text-white dark:text-gray-400">
            {t('popUp.subtitle')}
            <br />
            {t('popUp.hours')}
          </h3>
      
          <p className="text-gray-600 dark:text-gray-300">
            {t('popUp.description')}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              className="custom-buttom-red bg-white text-blue-500 hover:text-blue-600 px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
              style={{ marginBottom: "5px", marginRight: "3px" }}
            >
              {t('popUp.declineButton')}
            </Button>
            <StyledButtonDesktop
              href="https://wa.me/message/SXGUDW4HN3U4J1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="custom-button-green text-blue-500 hover:text-blue-600 px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                  <img src='telefone.webp' style={{width: "1.2rem"}}/> {t('popUp.acceptButton')}
              </Button>
            </StyledButtonDesktop>
            <StyledButtonMobile
              href="tel:+351961195956"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="custom-button-green text-blue-500 hover:text-blue-600 px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                  <img src='telefone.webp' style={{width: "1.2rem"}}/> {t('popUp.acceptButton')}
              </Button>
            </StyledButtonMobile>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PopUp;
