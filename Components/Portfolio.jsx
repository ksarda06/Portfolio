import React from 'react'

const Portfolio = () => {
  const openProjectLink = () => {
  window.open('https://appointmate-a067.onrender.com', '');
   };
   const openProjectLink1 = () => {
  window.open('https://ksarda06.github.io/Tree-visualization/', '');
   };
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Projects Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-yellow-800 hover:scale-105 cursor-pointer" onClick={openProjectLink}>
            <img src="./src/assets/appointmate.png" alt="" />
            <h3 className="text-lg font-semibold text-orange-400">AppointMate</h3>
            <p className="text-sm text-gray-300">A doctor appointment booking application built using MERN stack and deployed on Render.Integrated the razorpay payment gateway for secure and fast online payment.This application has features like resetting password,user authentication,welcoming email etc.which makes this application more efficient.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-yellow-800 hover:scale-105 cursor-pointer" onClick={openProjectLink1}>
            <img src="./src/assets/treevisualisation.png" alt="" />
            <h3 className="text-lg font-semibold text-orange-400">Binary Tree Visualizer</h3>
            <p className="text-sm text-gray-300">Created a binary tree visualizer application through which student can experience how operations like insertion,deletion and searching of nodes works which help the student to learn the different type of binary trees like BST,AVL,Splay and Red-black tree very easily.</p>
          </div>
        </div>
    </div>
  )
}

export default Portfolio
