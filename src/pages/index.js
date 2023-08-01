import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-profile.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anant | Home Page</title>
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-8">
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt=""
                className="w-3/4 h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="text-left"
              />
              <p className="my-4 text-base font-medium">
              Hello! I am Anant Dubey, a final year B.Tech student at Vellore Institute of Technology, Bhopal. I am an aspiring engineer with a burning passion for innovation and a desire to make a positive impact on the world through technology.
              </p>
              <p className="my-4 text-base font-medium">So, whether you&apos;re a fellow enthusiast, a potential collaborator, or simply curious about the fascinating world of ui ux design & app development, I invite you to explore my portfolio and discover the possibilities that lie within. Let&apos;s embark on this journey together and create extraordinary digital experiences!</p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/resume.pdf"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
                >
                  Resume <LinkArrow className={"w-6 m-1"} />
                </Link>
                <Link
                  href="mailto:anant.dubey2020@vitbhopal.ac.in"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize underline "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
