import React from "react";

function ImageCard() {
  const tags = "yellow, flower, blossom".split(",");
  return (
    <div className="flex flex-col max-w-sm border rounded-md bg-white">
      <div>
        <img
          src="https://pixabay.com/get/g57c72680c311e9fd4707717cdae45bcc44d9292ac4902f613810be16b99d64f93f1ffad7f2ec7daee2770f1b5bdc9938_640.jpg"
          alt="pixabay"
          className="object-contain"
        />
        <h2 className="text-purple-700 text-2xl font-bold px-3">Photo by </h2>
      </div>
      <div className="px-3 my-3">
        <ul>
          <li>
            <strong>Views:</strong>
          </li>
          <li>
            <strong>Downloads:</strong>
          </li>
          <li>
            <strong>Collections:</strong>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 px-3 mb-3">
        {tags.map((tag, index) => (
          <span key={index} className="bg-slate-200 rounded-full p-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
