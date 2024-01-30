import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setImages(await data.hits);
    }
    fetchImages();
  }, [term]);
  return (
    <div className="bg-slate-100 min-h-[100vh] flex flex-col  items-center gap-y-10">
      {/* ImageSearch */}
      <ImageSearch setTerm={setTerm} />
      {/* ImageCards */}
      <div className="grid grid-cols-3 place-items-center gap-7 w-[70%]">
        {images &&
          images.map((image) => (
            <ImageCard
              key={image.id}
              webformatURL={image.webformatURL}
              user={image.user}
              picTags={image.tags}
              views={image.views}
              downloads={image.downloads}
              collections={image.collections}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
