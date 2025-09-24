import React from 'react'
import { motion } from "framer-motion";
import profileImg from '../assets/profilepic.jpg';
const About = () => {
  return (

    <section
      id="about"
      className="w-full  text-white py-30 px-6 md:px-20 scroll-mt-24 bg-gradient-to-l from-gray-900 via-gray-800 to-black"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 justify-between mt-20">


        {/* About Text */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-6 border-b-4 border-yellow-400 inline-block">
            About Me
          </h2>

          <h2 className="text-3xl md:text-3xl font-extrabold  drop-shadow-lg mb-4">
            🙋‍♂️ Hi, I am
          </h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}   // Starts invisible and below
            animate={{ opacity: 1, y: 0 }}    // Fades in and moves up
            transition={{ duration: 1 }}   // Animation duration
            className="text-3xl md:text-4xl font-extrabold text-yellow-400 drop-shadow-lg mb-4"
          >
            Mahesh Singh Sangela
          </motion.h1>
          <p className="text-lg leading-relaxed"> A recent graduate with a passion for crafting clean,
            responsive, and user-friendly web applications. I specialize in front-end technologies like
            <span className="text-yellow-400 font-semibold"> HTML, CSS, JavaScript, React, Bootstrap</span>, and
            <span className="text-yellow-400 font-semibold"> Tailwind CSS</span>.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            I'm looking forward to joining a collaborative team where I can grow as a developer
            and contribute to real-world solutions with creativity and code.
          </p>
          <button
            className="mt-7 px-6 py-2 text-xl font-semibold text-black bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-500 text-black rounded-xl  hover:from-yellow-300 hover:to-yellow-400 transition duration-300
 ">
            <a href="/MAHESHSANGELA.pdf">View Resume</a>
          </button>
        </div>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className=" w-50 h-50 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg "
        >
          <img src={profileImg} alt="Profile" className="w-full h-full object-cover " />
        </motion.div>
      </div>


    </section>
  );
};
export default About
