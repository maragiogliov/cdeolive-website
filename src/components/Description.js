import React from 'react';

const Description = () => {
  const containerStyle = {
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#002F35',
    color: '#99FF00',
    fontFamily: 'Courier New, monospace',
    lineHeight: '1.5',
    textAlign: 'left',
    fontSize: '14px',
  };

  const headerStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const subHeaderStyle = {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#CCFF33',
  };

  const paragraphStyle = {
    marginBottom: '1rem',
  };

  const listStyle = {
    paddingLeft: '1.5rem',
    listStyleType: 'disc',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>Superior Category Olive Oil</div>
      <div style={paragraphStyle}>
        This premium olive oil is directly extracted from olives using only mechanical processes. It embodies the essence of quality and tradition, offering a rich flavor profile and exceptional health benefits.
      </div>
      <div style={subHeaderStyle}>Key Features:</div>
      <ul style={listStyle}>
        <li>100% natural, free from chemical additives.</li>
        <li>Produced with sustainable and environmentally friendly methods.</li>
        <li>Rich in natural antioxidants such as vitamin E.</li>
        <li>Exceptionally low acidity, less than 0.8%.</li>
        <li>Cold-pressed to preserve nutrients and flavor.</li>
      </ul>
      <div style={subHeaderStyle}>Certifications and Origins:</div>
      <div style={paragraphStyle}>
        Our olive oil is <strong>ORGANIC CERTIFIED</strong>, ensuring compliance with strict organic farming standards. The olives are sourced from carefully monitored and selected groves, primarily from Mediterranean regions renowned for their superior quality olive cultivation.
      </div>
      <div style={subHeaderStyle}>Health Benefits:</div>
      <ul style={listStyle}>
        <li>Promotes heart health due to its high content of monounsaturated fats.</li>
        <li>Supports a balanced diet and contributes to overall wellness.</li>
        <li>Possesses anti-inflammatory properties, aiding in reducing chronic inflammation.</li>
        <li>Loaded with antioxidants that combat free radicals, slowing the aging process.</li>
        <li>May help improve digestive health and nutrient absorption.</li>
      </ul>
      <div style={subHeaderStyle}>The Production Process:</div>
      <div style={paragraphStyle}>
        The production of this olive oil adheres to traditional and meticulous practices. The olives are handpicked to ensure optimal ripeness and immediately processed to maintain their freshness. The mechanical pressing technique ensures the oil retains its natural aroma, flavor, and nutrients, distinguishing it from other types of olive oil.
      </div>
      <div style={subHeaderStyle}>Culinary Uses:</div>
      <ul style={listStyle}>
        <li>Ideal for drizzling over salads, enhancing the freshness of vegetables.</li>
        <li>Perfect for marinating meats and fish, adding a delicate yet flavorful touch.</li>
        <li>Can be used for sautéing, providing a healthy alternative to butter or other oils.</li>
        <li>Enhances the flavor of soups, stews, and even baked goods.</li>
        <li>A delightful dip for fresh bread, seasoned with herbs and spices.</li>
      </ul>
      <div style={paragraphStyle}>
        Discover the authentic taste and unparalleled quality of our superior category olive oil. Whether you use it in your favorite recipes or as a finishing touch, it is guaranteed to elevate your culinary creations while promoting a healthy lifestyle.
      </div>
    </div>
  );
};

export default Description;