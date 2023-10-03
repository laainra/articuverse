import React from "react";
import { Button } from '../General/Button';

function Arts() {
  
    const cardContainerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      textAlign: "center", 
      margin: "0 0 50px 0"
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

          <div style={{ textAlign: "center" }}> {/* Wadah untuk tombol dengan textAlign: center */}
          <Button style={{     justifyContent: "center" }} title="More Arts" action={() => {/* Your action here */}}/>

        </div>
        </div>

      </div>
    );
  }
  
  
  export default Arts;