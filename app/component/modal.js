""
"use client"; // Если используете Next.js
import React from "react";

export default function Modal({ selectedImage, onClose }) {
  if (!selectedImage) return null;

  const largeImageUrl = `https://res.cloudinary.com/dpjbbj1hl/image/upload/w_1024,c_limit,q_auto:best/${selectedImage}`;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={largeImageUrl} alt="Large View" />
        <button className="close-button" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}
