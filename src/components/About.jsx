import React from "react";
import { FaUsers, FaRocket, FaHeart, FaAward, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
     <section className="flex flex-col lg:flex-row items-center justify-between 
px-4 py-12 max-w-6xl mx-auto gap-10">


  <div className="flex-1 w-full lg:w-auto text-center lg:text-left 
                  space-y-4 sm:space-y-5">

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold 
      bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent 
      leading-tight">
      About CodeLab
    </h1>

    <p className="text-sm sm:text-base md:text-lg text-gray-300 
      leading-relaxed px-1 sm:px-4 lg:px-0">
      Empowering developers to create, collaborate, and innovate through our 
      cutting-edge online code editor and development platform.
    </p>
  </div>


  <div className="flex-1 w-full">
    <div className="rounded-xl overflow-hidden shadow-xl 
                    sm:rounded-2xl sm:shadow-2xl 
                    transition-all duration-300 hover:scale-[1.02]">
      <img 
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        alt="Coding workspace" 
        className="w-full h-auto block"
      />
    </div>
  </div>

</section>


      <section className="py-12 bg-white bg-opacity-5">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">
            Our Mission
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-loose text-center">
            At CodeLab, we believe that coding should be accessible to everyone, everywhere. 
            Our mission is to provide a seamless, powerful, and collaborative coding 
            environment that helps developers bring their ideas to life without any barriers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            <div className="text-center p-6 transition-transform duration-300 hover:-translate-y-1">
              <FaUsers className="text-3xl md:text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-300 text-sm md:text-base">Active Developers</p>
            </div>
            <div className="text-center p-6 transition-transform duration-300 hover:-translate-y-1">
              <FaRocket className="text-3xl md:text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">10+</h3>
              <p className="text-gray-300 text-sm md:text-base">Projects Daily</p>
            </div>
            <div className="text-center p-6 transition-transform duration-300 hover:-translate-y-1">
              <FaHeart className="text-3xl md:text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">99.9%</h3>
              <p className="text-gray-300 text-sm md:text-base">Uptime</p>
            </div>
            <div className="text-center p-6 transition-transform duration-300 hover:-translate-y-1">
              <FaAward className="text-3xl md:text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">3+</h3>
              <p className="text-gray-300 text-sm md:text-base">Programming Languages</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-8 text-center">
          Why Choose CodeLab?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          <div className="bg-white bg-opacity-5 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-opacity-8 border border-white border-opacity-10 cursor-pointer">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:bg-opacity-20 hover:scale-110">
              <FaCode className="text-2xl md:text-3xl text-blue-500 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-4">Powerful Editor</h3>
            <p className="text-gray-300 leading-relaxed">
              Syntax highlighting, auto-completion, and real-time error checking 
              for multiple programming languages.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-opacity-8 border border-white border-opacity-10 cursor-pointer">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:bg-opacity-20 hover:scale-110">
              <FaUsers className="text-2xl md:text-3xl text-blue-500 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-4">Collaborative Coding</h3>
            <p className="text-gray-300 leading-relaxed">
              Work together with your team in real-time, share code snippets, 
              and collaborate seamlessly.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-opacity-8 border border-white border-opacity-10 cursor-pointer">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:bg-opacity-20 hover:scale-110">
              <FaRocket className="text-2xl md:text-3xl text-blue-500 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-4">Instant Deployment</h3>
            <p className="text-gray-300 leading-relaxed">
              Deploy your projects with a single click and share them with 
              the world instantly.
            </p>
          </div>
        </div>
      </section>

    
      <section className="py-12 text-center bg-white bg-opacity-5 mt-8">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Ready to Start Coding?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
            Join thousands of developers who are already using CodeLab to bring 
            their ideas to life.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-red-500 text-white no-underline px-6 py-4 md:px-8 md:py-4 text-lg font-bold rounded-full cursor-pointer transition-all duration-300 hover:bg-red-600 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
          >
            Get Started Now
          </Link>
        </div>
      </section>

    
      <div className="h-12 md:h-16 w-full"></div>
    </div>
  );
}