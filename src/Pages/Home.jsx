import React from "react";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="main-container">
      <div>
        <Navbar />
      </div>
      <div className="home-title">
        <h1>Dog Pictures</h1>
      </div>
      <div className="home-info">
        <p>
          This is a Front End Project made using React.js, which pulls dog
          pictures from an api. There are four breeds of dog to choose from in
          the navbar. Once a dog is selected you will be directed to a page with
          pictures of your selected dog and the link for that specific photo. To
          enlarge the photo and see the link to it simply click on the photo you
          want.
        </p>
      </div>
    </div>
  );
}

export default Home;
