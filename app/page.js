

import GalleryBtn from "./component/uploadBtn"
import GalleryClient from "./component/galleryClient";
import cloudinary from "cloudinary";

export default async function Gallery() {
  const cloudinaryData = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(100)
    .execute();

  const results = cloudinaryData.resources;

  return (
    <div className="wrapper">
      <header>
        <h1>Мои фото</h1>
        <GalleryBtn />
      </header>
      {/* Передаем данные в клиентский компонент */}
      <GalleryClient images={results} />
    </div>
  );
}
