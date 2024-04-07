'use client';

import Card from './card';

interface CreationsProps {
  manga: {
    name: string;
    quantity: number;
  };
}

export default function Creations(props: CreationsProps) {
  const { manga } = props;

  return (
    <div className='m-20 grid grid-flow-row grid-cols-1 items-stretch justify-center gap-10 sm:grid-cols-4 md:grid-cols-4'>
      {[...Array(manga.quantity)].map((_, i) => (
        <Card name={manga.name} index={i + 1} />
      ))}
    </div>
  );
}
