import React from 'react';
import { Link } from 'react-router-dom';

const CardArtikel = ({ image, title, description, author, date, link }) => {
  return (
    <Link to={link} className="block w-full">
      <div className="flex border-b border-gray-300 py-4 bg-white rounded-lg shadow-md overflow-hidden mb-4 transition-transform transform hover:scale-105">
        <div className="flex-shrink-0">
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

export default CardArtikel;
