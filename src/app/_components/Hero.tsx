import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900/80 min-h-screen">
      <div className="flex items-baseline justify-center px-3 relative bottom-[-5rem] cursor-pointer">
      <h2 className="border border-black dark:border-white px-3 py-2 rounded-full text-center">See What's New | <span className="text-red-500">AI Diagram</span></h2>
      </div>
     
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center mb-[5rem]">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-8xl font-extrabold sm:text-4xl">
            Understand User Flow
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              ‍for technical design{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
             Deliver accurate, consistent designs faster
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

           <Button size={"lg"}>Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
