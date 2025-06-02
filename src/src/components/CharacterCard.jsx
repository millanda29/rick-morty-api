// src/components/CharacterCard.jsx

import React from 'react';

const CharacterCard = ({ character }) => {
  if (!character) return null;

  return (
    <div style={styles.card}>
      <img src={character.image} alt={character.name} style={styles.image} />

      <div style={styles.info}>
        <h2>{character.name}</h2>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Type:</strong> {character.type || 'N/A'}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
        <p><strong>Location:</strong> {character.location.name}</p>
        <p><strong>Episodes:</strong> {character.episode.length}</p>
        <a href={character.url} target="_blank" rel="noreferrer">
          Ver en la API
        </a>
      </div>
    </div>
  );
};

// 💅 Estilos básicos en línea (puedes migrarlos a CSS/Tailwind)
const styles = {
  card: {
    display: 'flex',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    maxWidth: '600px',
    margin: '1rem auto',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '200px',
    objectFit: 'cover',
  },
  info: {
    padding: '1rem',
    flex: 1,
  },
};

export default CharacterCard;
