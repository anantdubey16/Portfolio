import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/profile-pic.jpg";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Anant | About page</title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Unveiling the Journey." className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-4 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
              Hey there! I&apos;m Anant Dubey, a Computer Science graduate and current Research Analyst at Edureka, where I dive deep into emerging technologies and design data-driven solutions. My passion lies in turning complex data into intuitive digital experiences, blending analytical thinking with creativity.
              </p>
              <p className="my-4 font-medium">
              When I&apos;m not analyzing trends or sketching out UI/UX designs, you&apos;ll find me experimenting in the kitchen or perfecting a new drawing. I believe that innovation thrives at the crossroads of curiosity and creativity.
              </p>
              <p className="font-medium">
              Join me on this journey as I explore the endless possibilities where data meets design. Cheers to creating something extraordinary!
              </p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image src={profilePic} alt="" className="w-full rounded-2xl" />
            </div>
          </div>
          <Skills />
          <Education />
          <Certifications />
        </Layout>
      </main>
    </>
  );
};

export default about;
