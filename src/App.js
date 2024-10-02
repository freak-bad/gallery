import React from 'react';
import './App.css';

function App() {
  const images = [
    { src: "https://cdn.pixabay.com/photo/2023/03/04/20/07/coffee-7830087_960_720.jpg", alt: "Image 1" },
    { src: "https://cdn.pixabay.com/photo/2022/11/01/17/46/candle-7562931_960_720.jpg", alt: "Image 2" },
    { src: "https://cdn.pixabay.com/photo/2023/01/16/18/53/binoculars-7723093_960_720.jpg", alt: "Image 3" },
    { src: "https://cdn.pixabay.com/photo/2023/12/11/12/51/lynx-8443540_960_720.jpg", alt: "Image 4" },
    { src: "https://cdn.pixabay.com/photo/2024/07/25/08/47/flower-8920535_960_720.jpg", alt: "Image 5" },
    { src: "https://cdn.pixabay.com/photo/2023/01/15/22/48/river-7721287_960_720.jpg", alt: "Image 6" },
    { src: "https://cdn.pixabay.com/photo/2024/09/17/04/24/lizard-9052821_960_720.jpg", alt: "Image 7" },
    { src: "https://cdn.pixabay.com/photo/2023/10/17/17/01/cat-8321993_960_720.jpg", alt: "Image 8" },
    { src: "https://cdn.pixabay.com/photo/2024/02/07/18/00/mushroom-8559536_960_720.jpg", alt: "Image 9" },
    { src: "https://cdn.pixabay.com/photo/2024/03/09/16/59/typewriter-8622984_960_720.jpg", alt: "Image 10" },
    { src: "https://cdn.pixabay.com/photo/2023/12/26/11/48/peacock-8470021_960_720.jpg", alt: "Image 11" },
    { src: "https://cdn.pixabay.com/photo/2024/07/21/19/22/butterflies-8910988_960_720.jpg", alt: "Image 12" },
    { src: "https://cdn.pixabay.com/photo/2023/01/16/18/53/binoculars-7723093_1280.jpg", alt: "Image 13" },
    { src: "https://cdn.pixabay.com/photo/2024/03/19/19/08/book-8643904_960_720.jpg", alt: "Image 14" },
    { src: "https://cdn.pixabay.com/photo/2023/11/01/11/07/path-8357152_960_720.jpg", alt: "Image 15" }
  ];

  return (
    <div className="App">
      <header>
        <h1>Welcome to My Stunning Photo Gallery</h1>
      </header>

      <section className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; 2024 My Stunning Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
