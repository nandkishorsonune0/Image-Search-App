import React, { useState } from "react";
import axios from "axios";
import "./search.css";
function Search() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=C7JupeqWNDW_XCJ0ylId6RUJfg8JmWX7YXc7rIElgg8`
      )
      .then((response) => {
        // console.log(response.data);
        setResult(response.data.results);
      });
  };
  return (
    <>
      <div className="form">
        <input
          type="text"
          className="input"
          value={photo}
          onChange={(e) => {
            setPhoto(e.target.value);
          }}
        />
        <button type="submit" onClick={changePhoto} className="button">
          Search
        </button>
      </div>

      <div className="card-list">
        {result.map((value) => {
          return (
            <div class="card">
              <img
                class="card--image"
                src={value.urls.small}
                alt={value.alt_description}
                width="50%"
                height="50%"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Search;
