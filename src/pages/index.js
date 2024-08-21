import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-profile2.jpg";
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
                text="Crafting Tomorrow's Innovations with Data and Design."
                className="text-left"
              />
              <p className="my-4 text-base font-medium">
              Hello! I&apos;m Anant Dubey, a Computer Science graduate from VIT Bhopal, and now a Research Analyst at Edureka. My role involves researching cutting-edge technologies, providing actionable insights that fuel innovation. With a strong foundation in UI/UX design, I also bring creativity to every project, ensuring that solutions are not only functional but also user-centric.
              </p>
              <p className="my-4 text-base font-medium">Explore my portfolio to see how I combine research with design to create solutions that make a difference. Whether you&apos;re a fellow innovator or a curious mind, let&apos;s connect and bring new ideas to life!

</p>
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
                  href="mailto:anantdubey750@gmail.com"
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
