import React, { useState } from "react";

function ImageSearch({ setTerm }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm(query);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <div className="relative flex items-center border-b-2 border-slate-400">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Image Term..."
          className="border-0 outline-0 w-[400px] h-[40px] p-5"
        />
        <button
          type="submit"
          className="absolute right-0 text-white bg-[#36A7A5] p-2 rounded-md"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default ImageSearch;
