import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
        <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="/public/kalash_sarda.jpg"
              alt="Kallu Kaliya"
              className="w-28 h-28 rounded-xl border-2 border-blue-400 shadow-md"
            />
            <div>
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span>👋</span> About Me
              </h2>
              <p className="text-gray-300">
                I'm a MERN Stack Developer with a passion for deepfake detection. I
                enjoy tackling challenging projects and staying up-to-date with
                the latest technologies. I'm always eager to learn and contribute
                to both front-end and back-end development.
              </p>
            </div>
          </div>
    </div>
    </div>
  )
}

export default About
