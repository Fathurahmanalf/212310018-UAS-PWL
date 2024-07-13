import React from "react";

import ListArtikel from "./Component/ListArtikel";

const Artikel = () => {
  return (
    <div className="relative">
      <div className="relative max-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center mb-20 mr-6"
          style={{
            backgroundImage: "url('/assets/cover1.png')",
            zIndex: -1,
          }}
        />
        <section className="relative z-10 container mx-auto p-4">
          <div className="flex items-center min-h-screen">
            <div className="w-1/2 pr-4 pb-32">
              <h1 className="text-3xl text-white font-bold mb-2 text-left">
                Menginspirasi Orang Tua <br />
                Disetiap Tahap Perkembangan
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div>
        <ListArtikel/>
      </div>
      
    </div>
  );
};

export default Artikel;
