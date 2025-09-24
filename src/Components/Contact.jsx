import React from 'react'

const Contact = () => {
    return (
        <section className=" min-h-full h-screen w-full py-20 flex flex-col  items-center justify-center text-white bg-gradient-to-l from-gray-900 via-gray-800 to-black  border-gray-700 ">

            {/* Heading */}
            <h1 className="text-4xl font-bold border-b-4 border-yellow-500 inline-block pb-2">📞 Contact Me</h1>

            <div className="flex flex-wrap gap-20 justify-around w-full max-w-5xl mt-20">

                {/* Get in Touch */}
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-[320px]">
                    <h2 className="text-3xl text-sky-400 font-semibold mb-3">Get in Touch</h2>
                    <p className="text-lg mb-3">Thanks for visiting my portfolio!</p>
                    <p className="text-gray-300 mb-5">
                        I'm open to freelance work, full-time opportunities, or project collaborations.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="https://www.linkedin.com/in/mahesh-singh-sangela-008aa4261/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/MaheshSangela"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:maheshsinghsangela7@gamil.com"
                            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition"
                        >
                            Email
                        </a>
                    </div>
                </div>

                {/*Contact Info */}
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-[320px]">
                    <h2 className="text-3xl text-sky-400 font-semibold mb-3">Contact Info</h2>
                    <p className="mb-2">📞 Phone: <span className="text-gray-300">+91 9870259356</span></p>
                    <p className="mb-2">📧 Email:
                        <a href="mailto:maheshsinghsangela7@gamil.com" className="text-yellow-400 ml-1 hover:underline">
                            maheshsinghsangela7@gamil.com
                        </a>
                    </p>
                    <p className="mb-2">📍 Location: Delhi, India</p>
                </div>
            </div>

            {/* Footer Note */}
            <p className="text-gray-500 text-sm mt-12">
                © {new Date().getFullYear()} <a href="https://www.linkedin.com/in/mahesh-singh-sangela-008aa4261/" className="text-sky-400">Mahesh Singh Sangela</a>. All rights reserved.
            </p>
        </section>
    )
}

export default Contact

