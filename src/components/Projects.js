import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
const Projects = () => {
  return (
    <div
      name="project"
      className="min-h-screen overflow-hidden grid-cols-3 gap-10 px-10  "
    >
      <div>
        <h1 className="text-4xl text-center font-bold m-1 p-1">
          <span className="text-orange-500">My</span> Projects
        </h1>
      </div>
      <div className="flex justify-between  ">
        <div className=" px-5 py-6 px-auto m-2 rounded-lg">
          <Project1 />
        </div>
        <div className=" py-6 px-auto m-2 rounded-lg ">
          <Project2 />
        </div>
        <div className=" py-6 px-auto m-2 rounded-lg ">
          <Project3 />
        </div>
      </div>
      <div>
        <a
          href="https://github.com/SahithaDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 justify-between transition duration-300">
            View More
          </button>
        </a>
      </div>
    </div>
  );
};
export default Projects;
