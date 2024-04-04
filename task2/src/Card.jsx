// import React from 'react';

const Card = () => {
  return (
    <div style={{ maxWidth: '20rem', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <div style={{ padding: '1rem 1.5rem' }}>
        <h2 style={{ color: '#333333', fontSize: '1.25rem', fontWeight: 'bold' }}>Card Title</h2>
        <p style={{ color: '#666666', marginTop: '0.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.5rem', backgroundColor: '#333333' }}>
        <p style={{ color: '#cccccc', margin: '0' }}>Author</p>
        <a href="#" style={{ padding: '0.25rem 0.5rem', backgroundColor: '#cccccc', color: '#333333', fontSize: '0.75rem', fontWeight: 'bold', borderRadius: '0.25rem', textDecoration: 'none' }}>Read more</a>
      </div>
    </div>
  );
}

export default Card;
