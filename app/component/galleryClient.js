"use client"; // Для клиентского рендеринга в Next.js

import { useState } from "react";
import Modal from "./modal";

export default function GalleryClient({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main >
        <div className="gallery">
            {images.map((image, index) => {
                const thumbnailUrl = `https://res.cloudinary.com/dpjbbj1hl/image/upload/c_fill,q_auto/${image.public_id}`;
                return (
                    <div className="gallery_item" key={image.public_id}>
                        <img
                            key={image.public_id}
                            src={thumbnailUrl}
                            alt="Thumbnail"
                            onClick={() => setSelectedImage(image.public_id)}
                            className="thumbnail"
                        />                
                    </div>

                );
            })}            
        </div>

      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </main>
  );
}
