import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from './ProjectData';

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <section className="w-full py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen ">
      <div className="max-w-6xl mx-auto text-center mt-20">
        <h2 className="text-4xl font-bold border-b-4 border-yellow-500 inline-block p-2 mb-4">🚀My Projects</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve built using different technologies.
        </p>


        <Slider {...settings} className='pb-8'>
          {Projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-800 via-slate-900 to-gray-950 rounded-2xl overflow-hidden shadow-xl border border-gray-500"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover "
              />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Button */}
                <div className='flex gap-2'>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                  >
                    View Project →
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                    >
                      Live demo →
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-block w-full text-center bg-indigo-400 text-white py-2 rounded-lg cursor-not-allowed"
                    >
                      Live demo →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;