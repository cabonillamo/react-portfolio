import React, { useState, useEffect } from "react";
import profilePic from "../../img/profile-picture.jpeg";
import "./About.css";

const About = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text =
      "  Soy Carlo Bonilla, un desarrollador web con experiencia en diversas tecnologías y lenguajes de programación. Actualmente soy estudiante activo de la Universidad Técnica Nacional, en Alajuela, Costa Rica.En mi tiempo libre, me gusta jugar fútbol o ir al gimnasio para desestresarme y poder programar con mayor claridad. Soy muy autodidacta y siempre estoy buscando aprender nuevas habilidades y mejorar mi conocimiento.";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        if (text[i] !== undefined) {
          setDisplayText((prevText) => prevText + text[i]);
        }
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Sobre mí
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-16">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center">
            <img
              src={profilePic}
              alt="Foto de perfil"
              className="rounded-full w-60 h-60 mx-auto object-cover object-center"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
              {displayText}
            </p>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-8 rounded-full transition duration-300 inline-block"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
