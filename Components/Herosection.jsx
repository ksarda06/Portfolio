import React from 'react'

const Herosection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './src/assets/kalash_sarda_resume.pdf'; // Path to your resume in the public folder
    link.download = 'My_Resume.pdf'; // The name you want for the downloaded file
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <img
          src="./src/assets/kalash_sarda.jpg"
          alt="Kalash Sarda"
          className="w-32 h-32 rounded-full border-4 border-blue-500 mb-6 shadow-lg"
        />
        <h1 className="text-4xl font-bold">Hi, I'm Kalash Sarda</h1>
        <p className="mt-2 text-orange-400 text-lg">
          MERN Stack Developer | Competitive Programmer | Tech Enthusiast
        </p>
        <div className="flex gap-4 mt-6">
          <p className="border-2 border-blue-500 bg-blue-100 text-blue-800 rounded-xl p-2 shadow-lg cursor-pointer hover:bg-yellow-800 hover:text-white hover:scale-110 transition duration-300" onClick={handleDownload}>Download Resume</p>
          <p className="border-2 border-blue-500 bg-blue-100 text-blue-800 rounded-xl p-2 shadow-lg cursor-pointer hover:bg-yellow-800 hover:text-white hover:scale-110 transition duration-300" onClick={() => {const section = document.getElementById('contact');
    section?.scrollIntoView({ behavior: 'smooth' });
  }}>Contact Me</p>
        </div>
    </div>
  )
}

export default Herosection
