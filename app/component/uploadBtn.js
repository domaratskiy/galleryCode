"use client";

import { CldUploadWidget } from "next-cloudinary";

export default function GalleryBtn() {
  return   (
    <CldUploadWidget uploadPreset="gallery">
      {({ open }) => {
        return (
          <button onClick={() => open()} className="uploadBtn">
            Выгрузить Фото
          </button>
        );
      }}
    </CldUploadWidget>
  )
}

 
