import { useState } from "react";
import { WhatsApp } from "../constants";

const Whatsapp = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="fixed bottom-0 right-0 m-2 z-50 transition duration-200 ease-in-out transform hover:scale-105 md:m-4 animate-fadeInUp">
      <div
        className="relative"
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}>
        {showMessage && (
          <div className="absolute bottom-20 right-0 mb-2 px-4 py-2 rounded-md shadow-lg animate-slideIn min-w-56 bg-color-3 text-color-2">
            {WhatsApp.hoverMessage}
          </div>
        )}
        <a href={WhatsApp.href} target="_blank" className="p">
          <img
            src={WhatsApp.src}
            className="w-16 animate-bounce md:w-20"
            alt={WhatsApp.alt}
          />
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
