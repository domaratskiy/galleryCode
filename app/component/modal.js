
"use client"; // Если используете Next.js
import React from "react";

export default function Modal({ selectedImage, onClose }) {
  if (!selectedImage) return null;

  

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={selectedImage} alt="Large View" />
        <button className="close-button" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}
