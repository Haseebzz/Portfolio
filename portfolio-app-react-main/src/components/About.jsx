import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Haseeb Chaudhury, nice to meet you.</p>
          </div>
          <div>
            <p>
              I am currently a junior at the City College Of New York studying
              computer science. However, I recently discovered my passion for
              web development and am now fully committed to learning and
              improving upon my skills in this field. I am a full stack
              developer with a deep passion for React, javascript, and other
              web-related technologies. My excitement comes from creativity and
              logic from making web-based applications as well as the
              never-ending learning of new technologies. My other hobbies
              include playing video games and reading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
