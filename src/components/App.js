// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoaded(true);
      });
  }, []);
  if (!isLoaded) return <p>Loading...</p>
  // if the data hasn't been loaded, show a loading indicator

  return (
    <div>
      
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
};

export default App;
