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
          Soumyanil Podder, a Kolkata native, boasts a love for food,
          technology, gaming, dogs, and a strong belief in theism. His academic
          background includes a degree in Hotel and Hospitality Administration
          from IHM Chandigarh. Despite having an enduring passion for coding,
          circumstances in his life initially directed him towards a different
          path. Nevertheless, fate intervened during the pandemic, rekindling
          his connection with coding.
        </p>
        <br />
        <p className="text-xl">
          A web developer with a vast array of knowledge in many different front
          end and backend languages, responsive frameworks, databases, and best
          coding practices. Look forward to using his skills for gaining more
          experience.
        </p>
      </div>
    </div>
  );
};

export default About;
