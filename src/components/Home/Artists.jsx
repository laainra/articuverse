import React from 'react';

function Artists() {
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
    <div id="worldwide-artists">
      <h2 className="text-center">Be Worldwide Artists</h2>
      <div style={cardContainerStyle}>
        {/* Card 1 */}
        <div className="card" style={cardStyle}>
          {/* Nama Artist */}
          <h3>Artist 1</h3>
          {/* Asal */}
          <p>Asal 1</p>
        </div>
        {/* Card 2 */}
        <div className="card" style={cardStyle}>
          {/* Nama Artist */}
          <h3>Artist 2</h3>
          {/* Asal */}
          <p>Asal 2</p>
        </div>
        {/* Card 3 */}
        <div className="card" style={cardStyle}>
          {/* Nama Artist */}
          <h3>Artist 3</h3>
          {/* Asal */}
          <p>Asal 3</p>
        </div>
      </div>
    </div>
  );
}

export default Artists()