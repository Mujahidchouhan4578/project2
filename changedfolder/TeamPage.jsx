import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assests/assests";
import Footer from "../Component/Footer";
import NxvisAnimation from "../Component/NxvisAnimation";

function TeamPage() {
  return (
    <div className="bg-[#E2DDD4] min-h-screen font-sans">
      <div className="w-full mb-8 bg-[#050505]">
        <NxvisAnimation />
      </div>

      <div className="w-full bg-white py-24 shadow-sm relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl text-gray-800 mb-20 font-medium text-center">Meet the team</h2>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
            
            {/* CEO */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center w-[180px] sm:w-[220px]">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 bg-gray-100 shadow-sm border-[4px] border-gray-50">
                <img src={assets.karan} alt="Karan - CEO" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1.5">Mr. Karan Nahata</h3>
              <p className="text-gray-400 text-[13px] font-semibold text-center uppercase tracking-wider">Managing Director & Chief Executive Officer (CEO)</p>
            </motion.div>

            {/* Software Developer (VS Rathore) */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center w-[180px] sm:w-[220px]">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 bg-gray-100 shadow-sm border-[4px] border-gray-50">
                <img src={assets.vsrathore} alt="VS Rathore" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1.5">Mr. VS Rathore</h3>
              <p className="text-gray-400 text-[13px] font-semibold text-center uppercase tracking-wider">Software Developer</p>
            </motion.div>

            {/* Team Member 1 */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center w-[180px] sm:w-[220px]">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 bg-gray-100 shadow-sm border-[4px] border-gray-50 flex items-center justify-center">
                <img src={assets.Animesh} alt="Animesh" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1.5">Mr Animesh</h3>
              <p className="text-gray-400 text-[13px] font-semibold text-center uppercase tracking-wider">Embedded System & PCB Design Engineer</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center w-[180px] sm:w-[220px]">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 bg-gray-100 shadow-sm border-[4px] border-gray-50 flex items-center justify-center">
                <img src={assets.Mahendra} alt="Mahendra"  className="w-full h-full object-cover"/>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1.5">Mr Mahendra Choudhary</h3>
              <p className="text-gray-400 text-[13px] font-semibold text-center uppercase tracking-wider">AI/ML & Drone Engineer</p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center w-[180px] sm:w-[220px]">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 bg-gray-100 shadow-sm border-[4px] border-gray-50 flex items-center justify-center">
                <img src={assets.Tarun} alt="Tarun" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1.5">Mr Tarun Kansara</h3>
              <p className="text-gray-400 text-[13px] font-semibold text-center uppercase tracking-wider">Embedded System & Circuit Designer</p>
            </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center w-[180px] sm:w-[220px]">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 bg-gray-100 shadow-sm border-[4px] border-gray-50 flex items-center justify-center">
                <img src={assets.Mujahid} alt="Tarun" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1.5">Mr Mujahid Chouhan</h3>
              <p className="text-gray-400 text-[13px] font-semibold text-center uppercase tracking-wider">AI/ML & Software Engineer</p>
            </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TeamPage;
