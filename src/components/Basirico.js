import React from 'react';

const BasiricoComponent = () => {
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
    
      const titleStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      };
    
      const subtitleStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#99FF00',
        textDecoration: 'underline',
        margin: '1rem 0',
        letterSpacing: '1px',
      };
    
      const descriptionStyle = {
        fontSize: '16px',
        color: '#99FF00',
        lineHeight: '1.8',
        textAlign: 'left',
        marginLeft: 'auto',
        marginRight: 'auto',
      };
    
      const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom : '4rem',
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
        textAlign: 'left',
        borderBottom: '2px solid #99FF00',
        color: '#f5f5f5',
      };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Colle Degli Elimi & Basiricò Partnership</h1>
      <h2 style={subtitleStyle}>A Synergistic Collaboration</h2>
      <p style={descriptionStyle}>
        Colle Degli Elimi proudly partners with Basiricò to produce premium-quality olive oil that represents the heritage and excellence of the region. This collaboration leverages the state-of-the-art facilities of Basiricò's modern olive mill, located at the base of Mount Erice, combined with Colle Degli Elimi's commitment to cultivating superior olives.
      </p>
      <div style={subtitleStyle}>Partnership Highlights:</div>
      <ul style={descriptionStyle}>
        <li>Exclusive access to Basiricò's continuous cycle stainless steel milling system.</li>
        <li>Combining generations of family expertise with innovative production methods.</li>
        <li>A shared vision of sustainability and respect for the environment.</li>
      </ul>
      <div style={subtitleStyle}>Shared Vision and Values:</div>
      <p style={descriptionStyle}>
        The partnership thrives on a shared dedication to quality and tradition. Basiricò's decades of milling expertise ensure that every batch of olive oil retains its natural aroma and nutrients, while Colle Degli Elimi's hands-on cultivation practices guarantee the finest olives are used. Together, we aim to deliver an unparalleled olive oil experience.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Feature</th>
            <th style={tableHeaderStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableRowLabelStyle}>State-of-the-Art Facilities</td>
            <td style={tableRowValueStyle}>Modern olive mill with cutting-edge extraction technology.</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Family-Driven Legacy</td>
            <td style={tableRowValueStyle}>Two generations of expertise in olive cultivation and milling.</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Eco-Friendly Practices</td>
            <td style={tableRowValueStyle}>Sustainable and environmentally conscious production methods.</td>
          </tr>
          <tr>
            <td style={tableRowLabelStyle}>Quality Assurance</td>
            <td style={tableRowValueStyle}>Strict oversight from olive selection to final production.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasiricoComponent;
