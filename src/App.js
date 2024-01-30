import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    async function fetchImages() {
      const response = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setImages(await data.hits);
      setIsLoading(false);
    }
    fetchImages();
  }, [term]);
  return (
    <div className="bg-slate-100 min-h-[100vh] flex flex-col  items-center gap-y-10">
      {/* ImageSearch */}
      <ImageSearch setTerm={setTerm} />
      {/* ImageCards */}
      <div className=" flex justify-center gap-5 flex-wrap xl:grid xl:grid-cols-3 xl:place-items-center xl:gap-7 2xl:w-[80%] ">
        {!isLoading &&
          images &&
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
      {!isLoading && images.length === 0 && (
        <h1 className="text-lg font-semibold">No Results Found</h1>
      )}
      {isLoading && <h1 className="text-xl font-bold">Loading Images....</h1>}
    </div>
  );
}

export default App;
