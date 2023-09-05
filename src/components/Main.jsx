import React, { useState, useEffect } from "react";
import Nav from "./sections/Nav";
import Memes from "./sections/Memes";
import Assignments from "./sections/Assignments";
import "../App.css";

const images = require.context("../images/", true);
const imageList = images.keys().map((image) => images(image));

function Main() {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState("reddit");

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next image index in a sequential order
      const nextImageIndex = (imageIndex + 1) % imageList.length;
      setImageIndex(nextImageIndex);
    }, 10000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <div
      className={`App transition-container`}
      style={{
        backgroundImage: `url("${imageList[imageIndex].default}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <Nav />
        <div>
          <div className="selectTab">
            <div
              className={selectedTab === "reddit" ? "selected" : "notSelected"}
              onClick={(e) => setSelectedTab(e.target.id)}
              id="reddit"
            >
              Reddit Memes
            </div>
            <div
              className={
                selectedTab === "assignments" ? "selected" : "notSelected"
              }
              onClick={(e) => setSelectedTab(e.target.id)}
              id="assignments"
            >
              Assignments
            </div>
          </div>
        </div>

        {selectedTab == "reddit" ? (
          <Memes />
        ) : selectedTab == "assignments" ? (
          <Assignments />
        ) : null}
      </div>
    </div>
  );
}

export default Main;
