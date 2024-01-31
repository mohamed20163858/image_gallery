import React from "react";
import Axios from "axios";
import fileDownload from "js-file-download";
function ImageCard({
  webformatURL,
  user,
  picTags,
  views,
  downloads,
  collections,
}) {
  const tags = picTags?.split(",") || [];
  const fileName = webformatURL.split("/").pop();
  function download(url, filename) {
    Axios.get(url, {
      responseType: "blob",
    }).then((res) => {
      fileDownload(res.data, filename);
    });
  }
  return (
    <div className="flex flex-col max-w-sm border rounded-md bg-white w-[300px] lg:min-w-[450px]">
      <div className="w-full">
        <img
          src={webformatURL}
          alt="pixabay"
          className="object-cover h-[250px] w-full lg:h-[400px] "
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
      <div className="flex justify-center mt-5">
        <button
          onClick={() => download(webformatURL, fileName)}
          className="text-white bg-[#36A7A5] p-2 rounded-md w-[200px] mb-[20px]"
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default ImageCard;
