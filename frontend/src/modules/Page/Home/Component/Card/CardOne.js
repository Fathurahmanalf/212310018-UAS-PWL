import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    image: "/assets/jam.png",
    title: "Perkembangan Fisik",
    description:
      "Bayi berkembang pesat dari mengangkat kepala, berguling, merangkak, hingga berjalan. Pelajari tahap-tahap penting motorik kasar dan halus dari usia 0-12 bulan.",
    link: "/artikelOne", 
  },
  {
    image: "/assets/sayur.png",
    title: "Menjaga Kesehatan Anak",
    description:
      "Temukan informasi tentang nutrisi yang tepat, imunisasi, dan cara menjaga kesehatan fisik serta mental anak.",
    link: "/artikelKesehatan", 
  },
  {
    image: "/assets/jatuh.png",
    title: "Mengatasi Tantangan Perilaku",
    description:
      "Dapatkan panduan untuk menghadapi berbagai tantangan perilaku anak, seperti tantrum, ketidakpatuhan, atau kecemasan.",
    link: "/artikelPerilaku", 
  },
];

const One = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="max-w-sm rounded-md overflow-hidden shadow-lg mr-4 mb-4 block hover:bg-slate-200">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </Link>
  );
};

const CardOne = () => {
  return (
    <div className="flex flex-wrap justify-center mt-24 -mx-5">
      {cardData.map((card, index) => (
        <One
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

export default CardOne;
