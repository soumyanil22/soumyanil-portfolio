import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg px-4 pt-12 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <h5 className="text-xl mt-6">
          - Software Engineer Trainee at{" "}
          <span className="text-orange-300">Parentof Solutions</span>
          <span className="text-base ml-1 text-gray-400">
            (Dec 2022 - Aug 2023)
          </span>
        </h5>
        <p className="text-xl mt-5"></p>
        <br />
        <ul className="text-lg list-disc list-inside">
          <li>
            Orchestrated a robust backend system utilizing MongoDB, GraphQL API,
            NodeJS, ExpressJS, and Redis.
          </li>
          <li>
            Designed a meticulous backend infrastructure for efficient data
            storage, retrieval, and seamless communication between application
            components.
          </li>
          <li>
            Developed a user-friendly frontend with ReactJS and NextJS for an
            engaging user interface.
          </li>
          <li>
            Ensured smooth interaction between the frontend and backend,
            delivering a responsive user experience.
          </li>
          <li>
            Integrated Strapi CMS to streamline content management, simplifying
            the creation, editing, and management of content.
          </li>
          <li>
            Empowered the team to control and update information presented to
            users.
          </li>
          <li>
            Achieved a harmonious blend of technologies on both the backend and
            frontend for a dynamic and user-friendly platform.
          </li>
          <li>
            Successfully met organization goals and exceeded user expectations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
