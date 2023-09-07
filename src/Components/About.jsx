import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-2/3 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 pt-14 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-6">
          A passionate coder, deeply enamored with diverse interests including
          food, technology, gaming, dogs, and a strong belief in theism.
          Academic background includes a degree in Hotel and Hospitality
          Administration from IHM Chandigarh. Despite a lasting passion for
          coding, life circumstances initially directed towards a different
          path. Nevertheless, fate intervened during the pandemic, reigniting
          the connection with coding. In the realm of web development, a skilled
          practitioner with a vast array of knowledge in various front-end and
          back-end languages, responsive frameworks, databases, and dedication
          to best coding practices. Eagerly looks forward to utilizing these
          skills for gaining more experience.
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
