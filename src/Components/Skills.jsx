import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import redux from "../assets/redux.png";
import jest from "../assets/jest.png";
import cypress from "../assets/cypress.png";
import webpack from "../assets/webpack.png";
import typescript from "../assets/typescript.png";
import GitHubCalendar from "react-github-calendar";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: node,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: webpack,
      title: "Webpack",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: jest,
      title: "Jest",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: cypress,
      title: "Cypress",
      style: "shadow-gray-600",
    },
    {
      id: 9,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-600",
    },
    {
      id: 11,
      src: redux,
      title: "Redux",
      style: "shadow-pink-500",
    },
    {
      id: 12,
      src: express,
      title: "Express JS",
      style: "shadow-gray-500",
    },
    {
      id: 13,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 14,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-500",
    },
    {
      id: 15,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  const softSkills = [
    {
      id: 1,
      title: "Interpersonal Skills",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      title: "Adaptability",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      title: "Quick Learner",
      style: "shadow-green-500",
    },
    {
      id: 5,
      title: "Problem Solving",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b pt-14 from-black to-gray-800 w-full text-white h-600"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technical Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-11 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Soft Skills
          </p>
        </div>
        <div className="w-full mt-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-10 sm:px-0">
          {softSkills.map(({ id, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <GitHubCalendar year="2022" username="soumyanil22" />
      </div>
    </div>
  );
};

export default Skills;
