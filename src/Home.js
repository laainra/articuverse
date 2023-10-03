import React from "react";
import { Carousel, Button } from "react-bootstrap";

function HeroSection() {
  const carouselStyle = {
    backgroundColor: "transparent",
    textAlign: "center",
    margin: "0 0 50px 0"

  };

  const titleStyle = {
    color: "white",
    fontSize: "70px",
    fontWeight: "bold",
    margin: "100px 0"
  };

  const subTitleStyle = {
    color: "white",
    fontSize: "30px",
  };

  const buttonStyle = {
    margin: "60px 50px 0 0",
    verticalAlign: "middle",
    margin: "60px"
  };

  const carouselData = [
  {
    image: `${process.env.PUBLIC_URL}/image/maxresdefault.jpg`,
    title: "Welcome to Articuverse",
    subTitle: "Discover, Create, and Connect with a Global Community of Artists and Art Enthusiasts",
  },
  {
    image: `${process.env.PUBLIC_URL}/image/carousel.jpg`,
    title: "Explore the Art World",
    subTitle: "Immerse yourself in a diverse range of artistic creations from around the globe",
  },
  {
    image: `${process.env.PUBLIC_URL}/image/carousel.jpeg`,
    title: "Join Our Creative Community",
    subTitle: "Share your own art, connect with fellow artists, and inspire the world",
  },

];


return (
  <Carousel style={carouselStyle} interval={5000}>
    {carouselData.map((item, index) => (
      <Carousel.Item key={index}>
        <img
          className="w-100"
          style={{ height: "600px", objectFit: "cover" }}
          src={item.image}
          alt={`Slide ${index + 1}`}
        />
        <Carousel.Caption>
          <h1 style={titleStyle}>{item.title}</h1>
          <p style={subTitleStyle}>{item.subTitle}</p>
          <Button style={buttonStyle} variant="danger">
            Explore Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
)
}

export default HeroSection;

function ExploreArts() {
  
  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center", // Tambahkan properti textAlign: center
  };

  const cardStyle = {
    margin: "20px",
    textAlign: "center",
    width: "400px",
    padding: "20px",
    backgroundColor: '#FFE9E9'
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
  };

  const arts = [
    { image: "/image/the-irony.jpg", title: "The Irony of Ruralism", author: "Eddy Susanto" },
    { image: "/image/st-john.jpeg", title: "St. John", author: "J. Aryadhitya Pramuhendra" },
    { image: "/image/syagini.jpeg", title: "389-696-104-554", author: "Syagini Ratna Wulan" },
  ];

  const buttonStyle = {
    margin: "20px",
  };

  return (
    <div id="explore-arts">
      <h2 className="text-center">Explore Art Inspirations</h2>
      <div style={cardContainerStyle}>
        {arts.map((art, index) => (
          <div className="card" style={cardStyle} key={index}>
            <img src={art.image} alt={art.title} style={imageStyle} />
            <h3>{art.title}</h3>
            <p>By {art.author}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}> {/* Wadah untuk tombol dengan textAlign: center */}
        <Button style={buttonStyle} variant="danger">
          More Arts
        </Button>
      </div>
    </div>
  );
}




export {HeroSection, ExploreArts};

// function WorldwideArtists() {
//   const cardContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexWrap: "wrap",
//   };

//   const cardStyle = {
//     margin: "20px",
//     textAlign: "center",
//     width: "400px",
//     padding: "20px",
//     height: "200px",
//   };

//   return (
//     <div id="worldwide-artists">
//       <h2 className="text-center">Be Worldwide Artists</h2>
//       <div style={cardContainerStyle}>
//         {/* Card 1 */}
//         <div className="card" style={cardStyle}>
//           {/* Nama Artist */}
//           <h3>Artist 1</h3>
//           {/* Asal */}
//           <p>Asal 1</p>
//         </div>
//         {/* Card 2 */}
//         <div className="card" style={cardStyle}>
//           {/* Nama Artist */}
//           <h3>Artist 2</h3>
//           {/* Asal */}
//           <p>Asal 2</p>
//         </div>
//         {/* Card 3 */}
//         <div className="card" style={cardStyle}>
//           {/* Nama Artist */}
//           <h3>Artist 3</h3>
//           {/* Asal */}
//           <p>Asal 3</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function LearnCultures() {
//   const cardContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexWrap: "wrap",
//   };

//   const cardStyle = {
//     margin: "20px",
//     textAlign: "center",
//     width: "400px",
//     padding: "20px",
//     height: "200px",
//   };

//   return (
//     <div id="learn-cultures">
//       <h2 className="text-center">Learn Cultures All Over The World</h2>
//       <div style={cardContainerStyle}>
//         {/* Card 1 */}
//         <div className="card" style={cardStyle}>
//           {/* Gambar */}
//           <img src="gambar1.jpg" alt="Culture 1" />
//           {/* Title */}
//           <h3>Title 1</h3>
//           {/* Subtitle */}
//           <p>Subtitle 1</p>
//         </div>
//         {/* Card 2 */}
//         <div className="card" style={cardStyle}>
//           {/* Gambar */}
//           <img src="gambar2.jpg" alt="Culture 2" />
//           {/* Title */}
//           <h3>Title 2</h3>
//           {/* Subtitle */}
//           <p>Subtitle 2</p>
//         </div>
//         {/* Card 3 */}
//         <div className="card" style={cardStyle}>
//           {/* Gambar */}
//           <img src="gambar3.jpg" alt="Culture 3" />
//           {/* Title */}
//           <h3>Title 3</h3>
//           {/* Subtitle */}
//           <p>Subtitle 3</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Information() {
//   const cardContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexWrap: "wrap",
//   };

//   const cardStyle = {
//     margin: "20px",
//     textAlign: "center",
//     width: "400px",
//     padding: "20px",
//     height: "200px",
//   };

//   return (
//     <div id="information">
//       <h2 className="text-center">Information</h2>
//       <div style={cardContainerStyle}>
//         {/* Card 1 */}
//         <div className="card" style={cardStyle}>
//           {/* Title */}
//           <h3>Find Exhibition</h3>
//         </div>
//         {/* Card 2 */}
//         <div className="card" style={cardStyle}>
//           {/* Title */}
//           <h3>Discover Museum</h3>
//         </div>
//       </div>
//     </div>
//   );
// }


// function JoinUs() {
//   const joinUsStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center", // Mengatur elemen ke tengah secara horizontal
//     textAlign: "center",  // Mengatur teks ke tengah
//   };

//   return (
//     <div id="join-us">
//       <h2 className="text-center">Join Us</h2>
//       {/* Form */}
//       <form style={joinUsStyle}>
//         <input type="email" placeholder="Enter your email address" />
//         <button type="submit">Get Started</button>
//       </form>
//     </div>
//   );
// }


// export {HeroSection, ExploreArts, WorldwideArtists, LearnCultures, Information, JoinUs};
