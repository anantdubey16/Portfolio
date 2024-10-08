import React from "react";
import AnimatedText from "@/components/AnimatedText";
import { FigmaIcon, GithubIcon } from "@/components/Icons";
import ems from "../../public/images/projects/ems.png";
import scholar from "../../public/images/projects/scholar.png";
import mentor from "../../public/images/projects/mentor.png";
import crypto from "../../public/images/projects/crypto.png";
import spotify from "../../public/images/projects/spotify.png";
import getwheels from "../../public/images/projects/getwheels.png";
import webscrapper from "../../public/images/projects/webscrapper.png";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={image} alt={title} className="w-full h-auto hover:scale-110 transition ease-in-out delay-100 duration-200" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
      
    </article>
  );
};

const FeaturedDesign = ({ type, title, summary, image, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={image} alt={title} className="w-full h-auto hover:scale-110 transition ease-in-out delay-100 duration-200" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <FigmaIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Anant | Projects page</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Ventures in Innovation!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Web Scraper in Rust"
                summary="This project is a multithreaded web scraper written in Rust. It fetches web pages concurrently and extracts specific information, such as titles, meta descriptions, headings, and links."
                type="Featured Project"
                image={webscrapper}
                link="https://github.com/anantdubey16/Rust-Web-Scraper"
                github="https://github.com/anantdubey16/Rust-Web-Scraper"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Realtime Crypto Tracker in Rust"
                summary="Rust Crypto Tracker is a real-time cryptocurrency price monitoring server built with Rust. This project uses the CoinAPI to fetch prices for multiple cryptocurrencies and broadcasts these updates to connected clients via WebSockets."
                type="Featured Project"
                image={crypto}
                link="https://github.com/anantdubey16/Realtime-Crypto-Price-Tracker-in-Rust"
                github="https://github.com/anantdubey16/Realtime-Crypto-Price-Tracker-in-Rust"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Scholar Extension"
                summary="Scholar extension is a feature loaded extension which gives you quick access to various applications and features. It not only saves time, improves user experience but also improves your multitasking. It contains all essential application like news, to-do list, blogs, dictionary, jokes, daily quotes, timer, calculator, game. And the show-stopper YouTube ad-skip feature."
                type="Project"
                image={scholar}
                link="https://microsoftedge.microsoft.com/addons/detail/scholar-extension/ealcaeeibjbbldffggeddeedfaajiekb"
                github="https://github.com/d17012002/scholar-extension"
              />
            </div>
            <div className="col-span-12">
              <FeaturedDesign
                title="MentorConnect"
                summary="Discover MentorConnect: Your Path to the Perfect Mentor! Our sleek UI/UX connects you effortlessly with inspiring mentors, making personal growth a breeze. Join today and unleash your potential!"
                type="Project"
                image={mentor}
                link="https://www.behance.net/gallery/176693055/Find-Your-Mentor"
                github="https://www.figma.com/file/XhWYAn3sOjOwVGkKcW7cFc/Mentor-project?type=design&t=DLYJVWmh2AVCkqdf-6"
              />
            </div>
            <div className="col-span-12">
              <FeaturedDesign
                title="Neu-Brutalism Spotify"
                summary="Neu-Brutalism Spotify: Where neumorphism meets bold brutalism for a sleek, raw, and immersive music experience."
                type="Project"
                image={spotify}
                link="https://www.behance.net/gallery/176693813/Neu-Brutalism-Spotify"
                github="https://www.figma.com/file/cCcfh4ma8Shu4DXZWYcM3e/spotify?type=design&t=DLYJVWmh2AVCkqdf-6"
              />
            </div>
            <div className="col-span-12">
              <FeaturedDesign
                title="Get-Wheels"
                summary="Get-Wheels: Your go-to platform for hassle-free vehicle rentals. Choose from a diverse fleet, book with ease, and enjoy an unforgettable driving experience. Convenience and satisfaction guaranteed. Join us now!"
                type="Project"
                image={getwheels}
                link="https://www.behance.net/gallery/158382641/Vehicle-Rental-Website"
                github="https://www.figma.com/file/BZ2ysldi3a4boRuMeUkUqQ/Get-Wheles-(Community)?type=design&node-id=0%3A1&mode=design&t=34KocH3lYWeniQsQ-1"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
