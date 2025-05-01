import React from 'react';

function Lookbook() {
  const looks = [
    "Look 1 - Summer Vibes",
    "Look 2 - Streetwear Classic",
    "Look 3 - Minimalist Workwear"
  ];

  return (
    <section style={{ padding: '2rem', backgroundColor: '#eee' }}>
      <h2>Lookbook</h2>
      <ul>
        {looks.map((look, index) => (
          <li key={index}>{look}</li>
        ))}
      </ul>
    </section>
  );
}

export default Lookbook;
