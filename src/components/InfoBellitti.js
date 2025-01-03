import React from 'react';

const InfoBellitti = () => {
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
    <h1 style={titleStyle}>Francesco Belliti & Victor Maragioglio Collaboration</h1>
    <h2 style={subtitleStyle}>Bridging Tradition and Innovation</h2>
    <p style={descriptionStyle}>
      Francesco Belliti, a proud Sicilian farmer based in Salemi, and Victor Maragioglio, a web developer with roots in Germany and the UK, have forged a unique partnership. This collaboration blends Francesco's deep connection to the land and agricultural expertise with Victor's innovative approach to technology and global outreach.
    </p>
    <div style={subtitleStyle}>Collaboration Highlights:</div>
    <ul style={descriptionStyle}>
      <li>Francesco's decades of farming experience ensure high-quality, sustainable agricultural practices.</li>
      <li>Victor's digital expertise enables modern branding and global market penetration.</li>
      <li>A shared commitment to preserving Sicilian heritage while embracing modern tools.</li>
    </ul>
    <div style={subtitleStyle}>Shared Vision and Values:</div>
    <p style={descriptionStyle}>
      Together, Francesco and Victor aim to showcase the beauty of Sicily's agricultural bounty on a global stage. While Francesco ensures the land yields only the finest produce, Victor brings these efforts to light through innovative digital platforms and effective storytelling. Their combined efforts highlight a perfect blend of tradition and technology.
    </p>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Aspect</th>
          <th style={tableHeaderStyle}>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={tableRowLabelStyle}>Agricultural Expertise</td>
          <td style={tableRowValueStyle}>Francesco's in-depth knowledge of Sicilian farming and sustainable practices.</td>
        </tr>
        <tr>
          <td style={tableRowLabelStyle}>Tech-Driven Outreach</td>
          <td style={tableRowValueStyle}>Victor's expertise in web development and global digital marketing.</td>
        </tr>
        <tr>
          <td style={tableRowLabelStyle}>Sicilian Heritage</td>
          <td style={tableRowValueStyle}>Preserving and promoting the rich culture and history of Sicily.</td>
        </tr>
        <tr>
          <td style={tableRowLabelStyle}>Global Vision</td>
          <td style={tableRowValueStyle}>Combining local authenticity with an international approach.</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default InfoBellitti;
