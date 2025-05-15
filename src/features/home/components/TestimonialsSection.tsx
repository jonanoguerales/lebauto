"use client";
import React, { useEffect, useRef, useState } from "react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ana Martínez",
    position: "Empresaria",
    quote:
      "El servicio de LEBAUTO ha sido excepcional. Me asesoraron perfectamente y encontré el Tesla Model 3 que buscaba a un precio inmejorable.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "Ingeniero",
    quote:
      "Gracias a LEBAUTO, el proceso de cambiar a un vehículo eléctrico fue mucho más sencillo de lo que esperaba. Su asesoramiento con los cargadores fue clave.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Laura Sánchez",
    position: "Médico",
    quote:
      "Increíble experiencia con LEBAUTO. No solo me ayudaron a encontrar mi coche ideal, sino que también me asesoraron sobre las ayudas disponibles.",
    avatar: "https://randomuser.me/api/portraits/women/64.jpg",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ));
  };

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl mx-auto w-full font-bold text-center mb-4">
          Las opiniones de nuestros clientes
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div
            ref={testimonialRef}
            className="relative overflow-hidden min-h-[480px] sm:min-h-[370px] md:min-h-[270px] lg:min-h-[240px]"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out p-2 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-white p-8 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-lebauto-accent"
                      />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <p className="text-lg italic mb-4 text-gray-400">{`"${testimonial.quote}"`}</p>
                      <div className="flex items-center justify-center md:justify-start mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="font-bold text-lebauto-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-lebauto-gray">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-2 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-lebauto-accent scale-125 bg-[#FFC107]"
                    : "bg-gray-300"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
