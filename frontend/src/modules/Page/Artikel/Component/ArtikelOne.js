import React from "react";

const ArtikelOne = () => {
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
                Memahami Perkembangan <br />
                Emosional Anak di Usia Dini
              </h1>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-start bg-white p-6 rounded-lg shadow-md">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img
              src="/assets/artikel1.png"
              alt="Emotional Development"
              className="w-full rounded-lg border-2 border-none"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h2 className="text-2xl font-bold mb-2">
              Memahami Perkembangan Emosional Anak di Usia Dini
            </h2>
            <p className="mb-4">
              Mengasuh anak adalah salah satu tugas yang paling menantang
              sekaligus memuaskan. Memahami perkembangan emosional anak di usia
              dini sangat penting bagi orang tua untuk memastikan mereka dapat
              memberikan dukungan yang tepat. Pada artikel ini, kita akan
              membahas tahap-tahap utama perkembangan emosional anak dari usia 0
              hingga 5 tahun, serta memberikan tips praktis untuk membantu anak
              mengelola emosinya dengan baik.
            </p>
            <h3 className="text-xl font-bold mb-2">
              Perkembangan Emosional di Usia 0-1 Tahun
            </h3>
            <p className="mb-2">
              Pada tahun pertama kehidupan, bayi mulai mengenal dan membentuk
              ikatan emosional dengan orang-orang di sekitarnya, terutama dengan
              orang tua atau pengasuh utama. Beberapa perkembangan emosional
              yang penting di tahap ini meliputi:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Ikatan Emosional: Bayi menunjukkan kelekatan dengan orang tua
                melalui senyuman, tangisan, dan kontak mata.
              </li>
              <li>
                Ketenangan: Bayi merasa tenang ketika digendong atau mendengar
                suara yang familiar.
              </li>
              <li>
                Respons terhadap Emosi: Bayi mulai menunjukkan reaksi terhadap
                emosi orang lain, seperti tersenyum ketika orang tua tersenyum
                atau menangis ketika mendengar suara keras.
              </li>
            </ul>
            <h3 className="text-xl font-bold mb-2">Tips untuk Orang Tua</h3>
            <p className="mb-2">
              Berikan perhatian dan respons yang konsisten terhadap kebutuhan
              bayi. Gunakan sentuhan lembut dan suara menenangkan untuk
              memberikan rasa aman dan nyaman kepada bayi. Hindari situasi yang
              bisa menyebabkan stres berlebihan pada bayi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelOne;
