import GalleryClient from "./component/galleryClient";
import GalleryBtn from "./component/uploadBtn";
import cloudinary from "cloudinary";

export default async function Page() {


  // Запрос изображений
  const cloudinaryData = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(100)
    .execute();

  const results = cloudinaryData.resources;

  // Передача данных в клиентский компонент
  return (
    <div className="wrapper">
      <header>
        <GalleryBtn/>
        <h1>Мои фото</h1>
      </header>
      <GalleryClient images={results} />
    </div>
  );
}
