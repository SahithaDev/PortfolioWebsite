import react from "react";
import { motion } from "framer-motion";
import project1 from "url:./project1.jpg";
const Project2 = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <div className="bg-white shadow-lg rounded-2xl p-3 m-3">
        <div className="w-[300px] rounded-4xl h-full p-1 object-cover">
          <img src={project1} />
        </div>
        <h1 className="text-orange-500 font-bold text-2xl p-1">Food-Zone</h1>
        <div className="text-gray-500">
          It's a swiggy clone project , to look more into it access my gihub
          repo It's a swiggy clone project , to look more into it access my
          gihub repo It's a swiggy clone project , to look more into it access
          my gihub repo It's a swiggy clone project , to look more into it
          access my gihub repo
        </div>
        <div className="flex gap-10 py-5 px-auto">
          <a href="https://github.com/SahithaDev/Foodie" target="_blank">
            <motion.div whileHover={{ scale: 1.1 }}>
              <button className="bg-orange-500 text-white rounded-2xl font-semibold p-2">
                GitHub🔗
              </button>
            </motion.div>
          </a>
          <motion.div whileHover={{ scale: 1.1 }}>
            <button className="bg-white font-semibold text-black border-black border-2 rounded-2xl p-2">
              Live Demo
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project2;
