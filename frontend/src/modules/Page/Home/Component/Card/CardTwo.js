import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    image: "/assets/5.png",
    title: "Perkembangan Fisik",
    description:
      "Bayi berkembang pesat dari mengangkat kepala, berguling, merangkak, hingga berjalan. Pelajari tahap-tahap penting motorik kasar dan halus dari usia 0-12 bulan.",
    link: "/artikelTwo",
  },
  {
    image: "/assets/6.png",
    title: "Perkembangan Fisik",
    description:
      "Bayi berkembang pesat dari mengangkat kepala, berguling, merangkak, hingga berjalan. Pelajari tahap-tahap penting motorik kasar dan halus dari usia 0-12 bulan.",
    link: "/artikelTwo",
  },
  {
    image: "/assets/7.png",
    title: "Perkembangan Fisik",
    description:
      "Bayi berkembang pesat dari mengangkat kepala, berguling, merangkak, hingga berjalan. Pelajari tahap-tahap penting motorik kasar dan halus dari usia 0-12 bulan.",
    link: "/artikelTwo",
  },
];

const Two = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl overflow-hidden shadow-lg mr-4 mb-4 block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:bg-slate-200">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </Link>
  );
};

const CardTwo = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start mt-8 mx-2 sm:mx-5">
      {cardData.map((card, index) => (
        <Two
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardTwo;