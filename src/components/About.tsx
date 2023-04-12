import React from "react";
import profilePic from "../img/img-po.jpg";
import "../components/About.css";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container py-20 mx-auto about-container">
        <h2 className="text-3xl font-bold text-center mb-10">Sobre mí</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-center md:text-right mb-5 md:mb-0">
            <img
              src={profilePic}
              alt="Foto de perfil"
              className="rounded-full w-40 h-40 mx-auto md:mx-0 object-cover object-center"
            />
          </div>
          <div className="md:w-1/2 md:pl-10 text-center md:text-left">
            <p className="text-gray-800 leading-relaxed mb-5">
              Hola, soy Carlo nilla, un desarrollador web con experiencia en
              diversas tecnologías y lenguajes de programación. Actualmente soy
              estudiante activo de la Universidad Técnica Nacional, en Alajuela,
              Costa Rica.
            </p>
            <p className="text-gray-800 leading-relaxed mb-5">
              En mi tiempo libre, me gusta jugar fútbol o ir al gimnasio para
              desestresarme y poder programar con mayor claridad. Soy muy
              autodidacta y siempre estoy buscando aprender nuevas habilidades y
              mejorar mi conocimiento.
            </p>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-700 text-white
           font-bold py-2 px-4 rounded inline-block transition duration-300"
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
