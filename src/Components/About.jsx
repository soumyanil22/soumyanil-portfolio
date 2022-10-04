import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-2/3 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi, I'm Soumyanil Podder. I am born and brought up in Kolkata. I am a
          foodie, techie, gamer, dog lover, and theist. I have a degree in Hotel
          and Hospitality Administration from IHM Chandigarh. I always loved
          coding but due to personal circumstances had to pursue other field.
          But god had other plans for me and I was re-united with my love, that
          is coding during the pandemic.
        </p>
        <br />
        <p className="text-xl">
          A web developer with a vast array of knowledge in many different front
          end and backend languages, responsive frameworks, databases, and best
          coding practices. Look forward to using my skills for gaining more
          experience.
        </p>
      </div>
    </div>
  );
};

export default About;
