"use client";

import { useEffect, useState } from "react";
import Modal from "./component/modal"
import GalleryBtn from "./component/uploadBtn"

export default function GalleryClient() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/cloudinary-images");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []);

  return (
    <>
    <header>
      <h1>фото</h1>
      <GalleryBtn/>
    </header>
    <main>
      <div className="wrapper">

      
      <div className="gallery">
        {images.map((image) => {
          const thumbnailUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,q_auto/${image.public_id}`;
          return (
            <div className="gallery_item" key={image.public_id}>
              <img
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
            selectedImage={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${selectedImage}`}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </main>    
    </>

  );
}
