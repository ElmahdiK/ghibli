'use client';

import { useState } from 'react';
import Creations from '@/components/Creations';
import Header from '@/components/Header';

const mangas = [
  {
    id: 1,
    name: 'Dragon Ball',
    quantity: 10,
  },
  {
    id: 2,
    name: 'Naruto',
    quantity: 8,
  },
  {
    id: 3,
    name: 'One Piece',
    quantity: 16,
  },
  {
    id: 4,
    name: 'FMA',
    quantity: 7,
  },
  {
    id: 5,
    name: 'SNK',
    quantity: 10,
  },
  {
    id: 6,
    name: 'JW',
    quantity: 8,
  },
];

export default function Page() {
  const [mangaIndex, setMangaIndex] = useState(0);

  return (
    <>
      <Header mangas={mangas} setMangaIndex={setMangaIndex} />
      <Creations manga={mangas[mangaIndex]} />
    </>
  );
}
