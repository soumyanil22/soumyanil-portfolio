import React from "react";
import Bobbi from "../assets/portfolio/Screenshot.png";
import Buffer from "../assets/portfolio/Screenshot1.png";
import GitHubCalendar from "react-github-calendar";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Bobbi,
    },
    {
      id: 2,
      src: Buffer,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-10">
          {portfolios.map(({ id, src }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="Buffer"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Github
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <GitHubCalendar year="2022" username="soumyanil22" />
      </div>
    </div>
  );
};

export default Portfolio;
