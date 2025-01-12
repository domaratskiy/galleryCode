"use client";

export default function GalleryClient({ images }) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div className="gallery_item" key={image.public_id}>
          <img
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,q_auto/${image.public_id}`}
            alt="Thumbnail"
            className="thumbnail"
          />
        </div>
      ))}
    </div>
  );
}
