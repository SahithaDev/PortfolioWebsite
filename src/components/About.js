import { motion } from "framer-motion";
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { BsDiscord } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-10 py-20 bg-white">
      <div className="max-w-6xl w-full  items-center">
        {/* RIGHT - TEXT */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOutIn" }}
          className="space-y-6"
        >
          <h2 className="text-5xl text-center font-bold">
            About <span className="text-orange-500">Me</span>
          </h2>

          <p className="text-gray-600 text-2xl text-center ">
            I am a Final year student with a strong passion for designing
            intuitive and visually appealing web interfaces. I enjoy problem
            solving and building meaningful applications that address real-life
            challenges. My curiosity drives me to continuously explore how
            modern technologies work, especially in the field of Artificial
            Intelligence, where I am keen on developing projects and gaining
            deeper understanding. I am an efficient learner who adapts quickly
            to new tools and concepts, always striving to improve my skills and
            create impactful solutions.
          </p>

          {/* <p className="text-gray-600 leading-relaxed">
            I’m always curious to learn new things, improve my skills, and
            create projects that solve real-world problems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I'm Sahitha, a passionate Frontend Developer who loves building
            clean, interactive, and user-friendly web experiences. I enjoy
            turning ideas into reality using modern technologies like React,
            Tailwind CSS, and JavaScript.
          </p>

          <p className="text-gray-600 leading-relaxed">
            I’m always curious to learn new things, improve my skills, and
            create projects that solve real-world problems.
          </p> */}

          {/* SKILLS */}
          <div className="flex justify-center items-center text-center flex-wrap gap-3">
            {[
              "React",
              "JavaScript",
              "Tailwind",
              "Node",
              "Express",
              "MongoDB",
              "HTML",
              "CSS",
              "Java",
              "Python",
              "Docker",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-10">
            <a
              href="https://www.linkedin.com/in/sahitha-mutakodoor-84225529a/"
              target="_blank"
            >
              <button className="bg-orange-500 w-16 l-16 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                <GrLinkedin />
              </button>
            </a>
            <a href="https://github.com/SahithaDev" target="_blank">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-4xl hover:bg-orange-600 transition">
                <ImGithub />
              </button>
            </a>
            <a
              href="https://leetcode.com/u/Sahitha_Mutakodoor/"
              target="_blank"
            >
              <button className="bg-orange-500 text-white px-6 py-2 rounded-4xl hover:bg-orange-600 transition">
                <SiLeetcode />
              </button>
            </a>
            {/* <button className="bg-orange-500 text-white px-6 py-2 rounded-4xl hover:bg-orange-600 transition">
              <BsDiscord />
            </button> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
