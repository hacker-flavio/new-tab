import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Memes.css";

function Memes() {
  const [memes, setMemes] = useState([]);
  const getMemes = async () => {
    const response = await axios.get("http://localhost:4000/memes", {
      withCredentials: true, // This instructs Axios to include cookies in the request
    });
    console.log(response.data.memes);
    setMemes(response.data.memes);
  };

  useEffect(() => {
    getMemes();
  }, []);
  return (
    <div className="outerMemesContainer">
      <div className="containerTitle">Top 20 Memes From r/Memes</div>
      <div className="memesContainer">
        {memes.map((meme) => {
          return (
            <div className="memeDiv">
              <div className="memeTitle">{meme.title}</div>
              <div className="memeImageDiv">
                <img src={meme.url} alt="" className="memeImage" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Memes;
