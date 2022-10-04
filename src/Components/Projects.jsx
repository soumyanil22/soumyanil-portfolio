import React from "react";
import Bobbi from "../assets/portfolio/Screenshot.png";
import Buffer from "../assets/portfolio/Screenshot1.png";
import Airbnb from "../assets/portfolio/Screenshot2.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: Bobbi,
      desc: "Functional clone of BobbiBrown made using HTML,CSS,JS (collaborative project)",
      demo: "https://wonderful-piroshki-728bef.netlify.app/#",
      github: "https://github.com/soumyanil22/Group_project_bobbi_brown",
    },
    {
      id: 2,
      src: Buffer,
      desc: "Functional clone of Buffer made using React, Redux, Chakra UI and other libraries (collaborative project)",
      demo: "https://bufferr.netlify.app/",
      github: "https://github.com/soumyanil22/painful-harbor-5807",
    },
    {
      id: 3,
      src: Airbnb,
      desc: "Functional clone of Airbnb made using Next JS and Tailwind CSS (individual project)",
      demo: "https://airbnb-clone-gray.vercel.app/",
      github: "https://github.com/soumyanil22/airbnb_clone",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-10">
          {portfolios.map(({ id, src, desc, demo, github }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt={`project ${src}`}
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="mx-auto text-center mt-1 w-full">
                  <p>{desc}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={demo} target="_blank" rel="noreferrer">
                      demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={github} target="_blank" rel="noreferrer">
                      github
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
