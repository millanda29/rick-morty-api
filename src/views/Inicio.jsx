// src/pages/Inicio.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

const CharacterView = () => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/1')
      .then((res) => setCharacter(res.data))
      .catch((err) => console.error('Error cargando personaje', err));
  }, []);

  return (
    <div>
      <h1>Detalle del Personaje</h1>
      <CharacterCard character={character} />
    </div>
  );
};

export default CharacterView;
