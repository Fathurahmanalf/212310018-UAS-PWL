import React from 'react';

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Manager",
    feedback: "lorem ipsum"
  },

];

const Testimoni = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 mx-14">Kritik dan Saran</h2>
        <p className="text-lg mb-12 mx-14">Jika anda berkenan bisa memberikan saran dan kritik membangun bagi website ini</p>
        <div className="flex flex-wrap mx-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded overflow-hidden shadow-lg p-6">
                <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimoni;
