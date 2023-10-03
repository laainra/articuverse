import React from 'react';

function Information() {
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
    <div id="information">
      <h2 className="text-center">Information</h2>
      <div style={cardContainerStyle}>
        {/* Card 1 */}
        <div className="card" style={cardStyle}>
          {/* Title */}
          <h3>Find Exhibition</h3>
        </div>
        {/* Card 2 */}
        <div className="card" style={cardStyle}>
          {/* Title */}
          <h3>Discover Museum</h3>
        </div>
      </div>
    </div>
  );
}

export default Information()