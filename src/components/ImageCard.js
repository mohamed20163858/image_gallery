import React from "react";

function ImageCard({
  webformatURL,
  user,
  picTags,
  views,
  downloads,
  collections,
}) {
  const tags = picTags?.split(",") || [];
  return (
    <div className="flex flex-col max-w-sm border rounded-md bg-white min-w-[350px]">
      <div className="w-full">
        <img
          src={webformatURL}
          alt="pixabay"
          className="object-cover h-[200px] w-full"
        />
        <h2 className="text-purple-700 text-2xl font-bold px-3">
          Photo by {user}
        </h2>
      </div>
      <div className="px-3 my-3">
        <ul>
          <li>
            <strong>Views: {views}</strong>
          </li>
          <li>
            <strong>Downloads: {downloads}</strong>
          </li>
          <li>
            <strong>Collections: {collections}</strong>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 px-3 mb-3 ">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="bg-slate-200 rounded-full p-2  inline-block text-sm"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
