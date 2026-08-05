import { motion } from "framer-motion";

const experiences = [
  {
    role: "Registration & Reception Coordinator",
    year: "Aug 2025 - Sep 2025",
    des: "Managed registrations and coordinated participant onboarding, ensuring a smooth event experience",
  },
  {
    role: "Events & Culturals Volunteer",
    year: "Jan 2025 - Feb 2025",
    des: "Assisted in organizing and executing large-scale cultural events, managing logistics and coordination.",
  },
  {
    role: "IEEE TEMS - VIT Vellore (Senior Core)",
    year: "Jul 2024 - Jul 2025",
    des: "Organized and hosted technical and management events, handling planning, coordination, and execution.",
  },
];

const Experience = () => {
  return (
    <div name="exp" className="min-h-screen text-black">
      <h1 className="text-4xl text-center p-3 m-5 font-bold">
        <span className="text-orange-500">My</span> Experiences
      </h1>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-600 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex mb-12 ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <motion.div
                className={`w-1/2 px-6 ${
                  isLeft ? " text-right" : " text-left"
                }`}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <h2 className="text-xl font-bold">{exp.role}</h2>
                  <p className="text-orange-400 font-semibold">{exp.year}</p>
                  <p className="text-gray-500 mt-2">{exp.des}</p>
                </div>
              </motion.div>

              {/* Dot */}
              <div className="absolute left-1/2 top-6 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
