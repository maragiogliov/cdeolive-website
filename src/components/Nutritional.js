import React from 'react';

const Nutritional = () => {
  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#002F35',
    color: '#99FF00',
    fontFamily: "'Courier New', Courier, monospace",
    textAlign: 'center',
    margin: '2rem ',
    borderRadius: '4px',
    border: '2px solid #99FF00',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.7)',
    position: 'relative',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontSize: '42px',
    fontWeight: 'bold',
    marginBottom: '1.2rem',
    textTransform: 'uppercase',
    color: '#99FF00',
    letterSpacing: '2px',
    animation: 'typewriter 4s steps(50) 1s 1 normal both',
  };

  const subtitleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#f5f5f5',
    textDecoration: 'underline',
    margin: '1rem 0',
    letterSpacing: '1px',
  };

  const descriptionStyle = {
    fontSize: '20px',
    color: '#f5f5f5',
    lineHeight: '1.8',
    textAlign: 'left',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const tableStyle = {
    width: '80%',
    borderCollapse: 'collapse',
    marginTop: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5px',
    backgroundColor: '#003840',
    border: '1px solid #99FF00',
  };

  const tableHeaderStyle = {
    backgroundColor: '#99FF00',
    color: '#002F35',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '0.8rem',
    textAlign: 'left',
    letterSpacing: '1px',
    borderRadius: '4px',
  };

  const tableRowLabelStyle = {
    backgroundColor: '#003840',
    padding: '0.8rem',
    fontWeight: 'bold',
    borderBottom: '2px solid #99FF00',
  };

  const tableRowValueStyle = {
    padding: '0.8rem',
    textAlign: 'center',
    borderBottom: '2px solid #99FF00',
    color: '#f5f5f5',
  };

  const matrixEffectStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")',
    zIndex: '-1',
    opacity: '0.2',
  };

  return (
    <div style={containerStyle}>
      <div style={matrixEffectStyle}></div>
      <h3 style={titleStyle}>Nutritional Declaration and Average Value per 100ML of EVOO</h3>

      <p style={descriptionStyle}>
        <span style={{ fontWeight: 'bold' }}>Extra Virgin Olive Oil (EVOO)</span> stands at the pinnacle of healthy fats,
        combining exceptional flavor with numerous health benefits. This oil is the result of ancient processes fused with
        modern-day knowledge to deliver an optimal product. EVOO is cold-pressed from olives, ensuring that the oil retains
        its full nutritional profile—packed with monounsaturated fats, antioxidants, and vitamins. A key aspect of Italian
        culture, especially from the fertile lands of Sicily, EVOO has a deep, enduring legacy in both cuisine and wellness.
      </p>

      <h4 style={subtitleStyle}>EVOO: An Ancient Code of Health</h4>
      <p style={descriptionStyle}>
        The history of Extra Virgin Olive Oil stretches back millennia. From ancient Mediterranean civilizations to the
        futuristic health-conscious trends of today, EVOO remains a symbol of vitality, longevity, and well-being.
        Studies confirm its anti-aging properties, its ability to combat oxidative stress, and its function as a shield
        against diseases. The <strong>Sicilian EVOO</strong>, with its distinctive flavor and composition, is often considered
        the gold standard, representing the marriage of tradition and cutting-edge health science.
      </p>

      <h4 style={subtitleStyle}>Nutritional Breakdown per 100ML</h4>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Component</th>
            <th style={tableHeaderStyle}>Value per 100ml</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableRowLabelStyle}>Energy</td>
            <td style={tableRowValueStyle}>3404 KJ / 820 KCAL</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Fat</td>
            <td style={tableRowValueStyle}>92g</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Of which Saturated Fatty Acids</td>
            <td style={tableRowValueStyle}>13g</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Carbohydrates</td>
            <td style={tableRowValueStyle}>0g</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Of which Sugars</td>
            <td style={tableRowValueStyle}>0g</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Proteins</td>
            <td style={tableRowValueStyle}>0g</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Salt</td>
            <td style={tableRowValueStyle}>0g</td>
          </tr>
        </tbody>
      </table>

      <h4 style={subtitleStyle}>The Technological Matrix of EVOO</h4>
      <p style={descriptionStyle}>
        EVOO isn't just about taste—it's a <em>matrix</em> of health benefits, a biochemical code that affects the body on a
        molecular level. The polyphenols in EVOO, particularly <strong>oleocanthal</strong>, are natural anti-inflammatories,
        working as "molecular agents" to combat cellular damage. These compounds modulate the body’s gene expression, promote
        antioxidant activity, and support brain function. It’s like upgrading your health system with every drop you consume.
      </p>

      <h4 style={subtitleStyle}>Sicilian EVOO: A Local Legacy in a Global System</h4>
      <p style={descriptionStyle}>
        Sicily’s climate—sun-drenched and warm—coupled with its ancient soils, yields an olive oil with an unparalleled
        nutritional profile. The island’s EVOO is a product of its unique terroir, a combination of soil, weather, and
        centuries-old farming techniques. Olives grown here thrive in conditions that stimulate the production of potent
        antioxidants, giving Sicilian EVOO its unmistakable aroma and taste, as well as its rich health benefits.
      </p>

      <h4 style={subtitleStyle}>The EVOO Production Process: Decryption of Tradition</h4>
      <p style={descriptionStyle}>
        The EVOO production process can be likened to a carefully executed algorithm—each step critical to extracting
        the perfect "code" that forms the health benefits and exquisite flavor. Olives are hand-picked at optimal ripeness,
        washed, crushed into paste, and cold-pressed to ensure that no heat alters the natural properties. This cold
        extraction is a pure, unmodified process, protecting the integrity of the "olive oil code" without chemical interference.
      </p>

      <h4 style={subtitleStyle}>Global Olive Oil Statistics</h4>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Statistic</th>
            <th style={tableHeaderStyle}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableRowLabelStyle}>Global Production (2020)</td>
            <td style={tableRowValueStyle}>3.2 million tonnes</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Top Producer (2020)</td>
            <td style={tableRowValueStyle}>Spain (1.5 million tonnes)</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Top Exporter (2020)</td>
            <td style={tableRowValueStyle}>Italy</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Sicilian Olive Oil Production</td>
            <td style={tableRowValueStyle}>50 million liters annually</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Olive Oil Exports (Italy, 2020)</td>
            <td style={tableRowValueStyle}>Over 500 million euros</td>
          </tr>
        </tbody>
      </table>

      <h4 style={subtitleStyle}>Conclusion: Unlocking the Matrix of Health</h4>
      <p style={descriptionStyle}>
        Extra Virgin Olive Oil is more than just an ingredient—it's a gateway to optimal health. Its biochemistry
        aligns with the body’s natural processes, helping to unlock greater potential in the fight against disease and aging.
        In the digital age, where data is paramount, EVOO represents a return to simplicity, tradition, and wellness. From
        the sunlit groves of Sicily to the kitchens of the world, EVOO is the olive oil for those seeking not only flavor
        but a deeper connection to health and vitality.
      </p>
    </div>
  );
};

export default Nutritional;
