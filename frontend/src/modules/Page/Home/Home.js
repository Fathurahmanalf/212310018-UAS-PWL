import React from "react";
import CardOne from "./Component/Card/CardOne";
import CardTwo from "./Component/Card/CardTwo";
import Testimoni from "./Component/Testimoni";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="max-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/cover.png')",
              // zIndex: -1,
            }}
          />
        </div>

        <section className="relative container mx-auto px-6 sm:px-12 md:px-32">
          <div className="flex items-center min-h-screen">
            <div className="w-full sm:w-3/4 md:w-1/2 pr-0 sm:pr-4 pb-32 sm:pb-56">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold text-left">
                Menginspirasi Orang Tua Disetiap Tahap
                <span className="text-orange-500">Perkembangan</span>
              </h1>
              <h5 className="text-base sm:text-lg md:text-xl text-white py-3 sm:py-5 text-left">
                Menjawab setiap permasalahan orangtua <br />
                Dalam mendidik anak pada masa perkembangannya
              </h5>
              <button className="bg-white text-black font-semibold px-3 sm:px-4 mt-3 sm:mt-5 py-2 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </section>

        <section className="my-0 p-8 bg-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <img
                src="/assets/1.png"
                alt="Gambar Konten Tambahan"
                className="rounded-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold pb-4 text-left">
                Happy <br />
                Parenting
              </h2>
              <p className="text-left">
                Rumah bagi setiap keluarga yang mencari panduan, dukungan, dan
                inspirasi untuk kehidupan yang lebih harmonis dan bahagia. Kami
                menyediakan konten berkualitas untuk membantu Anda mengasuh anak
                dengan cinta dan penuh perhatian.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2 md:pl-16 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold pb-4 text-left">
                Tips dan Saran <br />
                Praktis untuk Orang Tua
              </h2>
              <p className="text-left">
                Masa-masa awal kehidupan anak adalah periode yang penuh
                tantangan dan kebahagiaan. <br />
                Sebagai orang tua, Anda akan menghadapi berbagai situasi yang
                memerlukan pengetahuan dan pendekatan yang tepat.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:pr-8 md:pl-3">
              <img
                src="/assets/16.png"
                alt="Gambar Konten Tambahan"
                className="mx-24 rounded-lg w-2/3"
              />
            </div>
          </div>

          <CardOne />
        </section>
        <section className="bg-white">
          <div className="pl-40 pt-12">
            <div className="font-bold text-3xl pb-2">
              Kenali perkembangan anak <br />
              dimulai dari awal kehidupannya
            </div>
            <CardTwo />
          </div>
        </section>

        <section className="bg-white">
          <div className="pl-40 pt-12 py-5">
            <div className="font-bold text-3xl pb-2">
              Kenali perkembangan anak <br />
              dimulai dari awal kehidupannya
            </div>
            <CardTwo />
          </div>
        </section>

        <div>
          <Testimoni />
        </div>
      </div>
    </div>
  );
}

export default Home;
