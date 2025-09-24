import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillData from './Data';
import '../index.css';

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    responsive: [

      {
        breakpoint: 480, // small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };


  return (
    <section
      id="skills"
      className="w-full py-16 px-6 bg-gradient-to-l from-gray-900 via-gray-800 to-black text-white h-screen flex-justify-center items-center "
    >
      {/* Heading */}
      <div className="text-center mb-12 mt-20">
        <h2 className="text-4xl font-bold border-b-4 border-yellow-500 inline-block pb-2">
          🛠️ Skills
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Technologies I’ve worked with
        </p>
      </div>

      {/* Skills Slider */}
      <div className="max-w-6xl mx-auto md:flex flex-col ">
        <Slider {...settings} className='pb-8'>
          {SkillData.map((skill, index) => (
            <div key={index} className="text-center flex justify-center items-center rounded-xl ">
              <div className="group bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 flex flex-col items-center ">
              <div className="flex justify-center items-center mb-2 ">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-20 h-20 object-contain rounded-xl bg-white"
                />
              </div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p className="text-gray-500 text-sm text-center">{skill.dis}</p>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
