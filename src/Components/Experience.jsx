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
        <p className="text-xl">
          Worked on the backend involved orc hestrating a robust system that
          harnessed the capabilities of MongoDB, GraphQL API, NodeJS, ExpressJS,
          and Redis. The backend infrastructure was meticulously designed to
          facilitate data storage, retrieval, and efficient communication
          between various components of the application. On the frontend,
          ReactJS and NextJS were instrumental in crafting an engaging user
          interface that seamlessly interacted with the backend, delivering a
          smooth and responsive user experience. Additionally, to enhance the
          organization's content management workflow, the Strapi CMS was
          strategically integrated with the product's frontend. This integration
          streamlined the process of creating, editing, and managing content,
          empowering the team to easily control and update the information
          presented to users. This harmonious blend of technologies on both the
          backend and frontend fronts ultimately resulted in a dynamic and
          user-friendly platform, poised to meet the organization's goals and
          user expectations.
        </p>
      </div>
    </div>
  );
};

export default Experience;
