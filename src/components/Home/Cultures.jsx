import React from 'react';

function Cultures() {
  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const cardStyle = {
    margin: "20px",
    textAlign: "center",
    width: "400px",
    padding: "20px",
    height: "200px",
  };

  return (
    <div id="learn-cultures">
      <h2 className="text-center">Learn Cultures All Over The World</h2>
      <div style={cardContainerStyle}>
        {/* Card 1 */}
        <div className="card" style={cardStyle}>
          {/* Gambar */}
          <img src="gambar1.jpg" alt="Culture 1" />
          {/* Title */}
          <h3>Title 1</h3>
          {/* Subtitle */}
          <p>Subtitle 1</p>
        </div>
        {/* Card 2 */}
        <div className="card" style={cardStyle}>
          {/* Gambar */}
          <img src="gambar2.jpg" alt="Culture 2" />
          {/* Title */}
          <h3>Title 2</h3>
          {/* Subtitle */}
          <p>Subtitle 2</p>
        </div>
        {/* Card 3 */}
        <div className="card" style={cardStyle}>
          {/* Gambar */}
          <img src="gambar3.jpg" alt="Culture 3" />
          {/* Title */}
          <h3>Title 3</h3>
          {/* Subtitle */}
          <p>Subtitle 3</p>
        </div>
      </div>
    </div>
  );
}

export default Cultures()