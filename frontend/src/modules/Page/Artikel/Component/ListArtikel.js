import React from 'react';
import { Link } from 'react-router-dom';


const ListArtikel = () => {
  const cardsData = [
    {
      image: '/assets/artikel2.png',
      title: 'Memahami Perkembangan Emosional Anak di Usia Dini',
      description: 'Mengasuh anak adalah salah satu tugas yang paling menantang sekaligus memuaskan. Memahami perkembangan emosional anak di usia dini sangat penting bagi orang tua untuk memastikan mereka dapat memberikan dukungan yang tepat.',
      author: 'Layanan Ibu',
      date: '12 Juni 2023',
      link: '/artikelOne',
    },
    {
      image: '/assets/artikel2.png',
      title: 'Memahami Perkembangan Emosional Anak di Usia Dini',
      description: 'Mengasuh anak adalah salah satu tugas yang paling menantang sekaligus memuaskan. Memahami perkembangan emosional anak di usia dini sangat penting bagi orang tua untuk memastikan mereka dapat memberikan dukungan yang tepat.',
      author: 'Layanan Ibu',
      date: '12 Juni 2023',
      link: '/artikelTwo', 
    },
  ];

  const CardArtikel = ({ image, title, description, author, date, link }) => {
    return (
      <Link to={link} className="block w-full">
        <div className="flex border-b border-gray-300 py-4 bg-white rounded-lg shadow-md overflow-hidden mb-4 transition-transform transform hover:scale-105">
          <div className="flex-shrink-0 mx-5">
            <img className="h-24 w-32 object-cover" src={image} alt={title} />
          </div>
          <div className="ml-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-700">{description}</p>
            </div>
            <div className="text-sm text-gray-500">
              <p>{author} - {date}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Tips Praktis untuk Setiap Tahap Pertumbuhan</h1>
      {cardsData.map((card, index) => (
        <CardArtikel
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          author={card.author}
          date={card.date}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default ListArtikel;
