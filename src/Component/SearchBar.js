import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ setImages }) => {
  const [searchTerm, setSearchTerm] = useState("nature");
  const [previousSearchTrem, setPreviousSearchTerm] = useState("");

  console.log(searchTerm);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = () => {
    if (searchTerm === previousSearchTrem) return;

    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: "0g3wXTI-5iQlqtFrwNCEmj70n22VYIHdr-p977qCJew",
          query: searchTerm,
        },
        // headers:{
        //     Authorization : "Client-ID 0g3wXTI-5iQlqtFrwNCEmj70n22VYIHdr-p977qCJew "
        // }
      })

      .then((response) => {
        setImages(response.data.results);
        // setSearchTerm("")
        setPreviousSearchTerm(searchTerm);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an images.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={fetchImage}>Search</button>
    </div>
  );
};

export default SearchBar;
