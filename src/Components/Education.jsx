import React from 'react'

const Education = () => {
  return (
    <section id="education" className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-yellow-500 py-16 min-h-full min-h-full w-full ">
      <div className="max-w-6xl mx-auto py-20 h-screen">
        <h2 className="text-4xl text-white font-bold mb-6 border-b-4 border-yellow-400 inline-block">
          🎓 Education
        </h2>

        <div className="relative border-l border-yellow-400 pl-8  ">
          {/* Item 1 */}
          <div className="mb-20">
            <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[7px] mt-2"></div>
            <h3 className="text-xl font-semibold">Bachelor of Science in Information Technology</h3>
            <p className="text-md text-gray-300 font-semibold">Hemvati Nandan Bahuguna Garhwal University — 2022 - 2025</p>
            <p className="mt-2 text-gray-400">
              "Built a strong foundation in web development, databases, and programming principles."
            </p>
          </div>

          {/* Item 2 */}
          <div className="mb-20">
            <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[7px] mt-2"></div>
            <h3 className="text-xl font-semibold">Higher Secondary Education (UK Board)</h3>
            <p className="text-sm text-gray-300 font-semibold">Govt I. C. Kheera Almora — 2021 - 2022</p>
            <p className="mt-2 text-gray-400">
              "Built strong analytical and problem-solving skills"
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[7px] mt-2"></div>
            <h3 className="text-xl font-semibold">High School(UK Board)</h3>
            <p className="text-sm text-gray-300 font-semibold">Govt I. C. Kheera Almora — 2019 - 2020</p>
            <p className="mt-2 text-gray-400">
              "Developed an interest in technology and started exploring coding and web design"
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Education
