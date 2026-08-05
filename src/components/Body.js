import Photo from "./photo";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
const Body = () => {
  return (
    <div name="body" className="min-h-screen relative overflow-hidden">
      <div className="flex flex-col justify-between items-center h-full py-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-bold flex p-2 justify-center ">
              <button className="border text-md rounded-4xl py-2 px-2 mb-2 font-mono">
                Hello!
              </button>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOutIn" }}
          >
            <h2 className="text-5xl text-center font-mono p-2 font-bold">
              I'm <span className="text-orange-500">Sahitha,</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOutIn" }}
          >
            <p className="text-lg m-5 font-semibold font-mono text-center">
              <TypeWriter />
            </p>
          </motion.div>
        </div>

        <div className="w-[500px] flex justify-center bottom-0 items-center">
          <Photo />
        </div>
      </div>
    </div>
  );
};
export default Body;
