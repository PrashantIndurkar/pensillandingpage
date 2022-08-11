import React from "react";
import communityLogo from "../assets/jsc.svg";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import gif from "../assets/jsc.gif";
import Item from "./Item";
import { SiJavascript } from "react-icons/si";
import hitesh from "../assets/hitesh.jpg";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import pensil from "../assets/pensil_logo.svg";
import ExploreGroup from "./ExploreGroup";

import Faq from "./Faq";
import Chat from "./Chat";

const Home = () => {
  return (
    <>
      <nav className="flex border-b-2 px-4 justify-between h-[8vh] items-center md:px-14 lg:px-20">
        <img src={communityLogo} alt="" className="h-10 w-10 cursor-pointer" />
        <button className="bg-primaryBlue rounded-full font-bold px-4 py-1.5 text-white">
          Login
        </button>
      </nav>
      <header className="">
        <div className="px-4 sm:px-8 flex justify-center items-center flex-col h-[50vh] space-y-10">
          <h1 className="text-center tracking-wide font-black lg:text-5xl text-pensilBlack text-3xl sm:text-4xl md:text-5xl">
            JavaScript Community
          </h1>
          <p className="text-center leading-relaxed tracking-wide md:w-4/5 lg:w-3/5">
            Welcome to Javascript community. The best Js community for Front end
            Developers. To Talk make Friends around js Eco-System.
          </p>
          <a
            href="#"
            className="text-primaryBlueLight hover:text-primaryBlue transition duration-150 font-bold tracking-wide text-xl sm:text-2xl md:text-3xl"
          >
            Let's Join <ChevronRightIcon className="h-7 w-7 inline" />
          </a>
        </div>
        <div className="px-6 sm:px-8 md:px-14 lg:px-40">
          <img src={gif} alt="community Gif" className="rounded-xl " />
        </div>
      </header>
      {/* Features about community sections  */}
      <section className="sectionBackground flex flex-col items-center md:mt-16 px-4 space-y-6 mt-12 pb-24">
        <h2 className="text-2xl pt-20 text-center font-bold md:text-3xl lg:pt-20">
          Highly Active JavaScript Community
        </h2>
        <p className="pt-4 text-center pb-14 w-4/5 md:w-4/5 lg:w-3/6">
          This is the best and most highly active community in front end
          development and you can be a part of this community just click on{" "}
          <span className="font-medium text-primaryBlueLight cursor-pointer">
            Join
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-10 lg:gap-y-14 md:px-12 lg:px-36 xl:px-48">
          <Item
            Icon={SiJavascript}
            description={
              "Post your queries into the desired group and get instant support from developers"
            }
          />
          <Item
            Icon={SiJavascript}
            description={
              "Post your queries into the desired group and get instant support from developers"
            }
          />
          <Item
            Icon={SiJavascript}
            description={
              "Post your queries into the desired group and get instant support from developers"
            }
          />
          <Item
            Icon={SiJavascript}
            description={
              "Post your queries into the desired group and get instant support from developers"
            }
          />
          <Item
            Icon={SiJavascript}
            description={
              "Post your queries into the desired group and get instant support from developers"
            }
          />
          <Item
            Icon={SiJavascript}
            description={
              "Post your queries into the desired group and get instant support from developers"
            }
          />
        </div>
      </section>
      {/* community Owner Name section */}
      <section>
        <div className="bg-green-50 flex flex-col md:flex-row py-20 justify-center items-center px-4 md:px-14 lg:px-32 gap-x-6">
          <div className="flex flex-col items-center justify-center md:w-1/3 ">
            <img src={hitesh} alt="" className="h-72  rounded-lg " />
            <h2 className="mt-8 text-xl font-bold text-center">
              Hitesh Choudhary
            </h2>
          </div>
          <div className="pt-12 md:pt-0 w-1/2 flex flex-col justify-center items-center ">
            <h1 className="text-3xl mb-6 font-semibold">About me</h1>
            <p className="leading-relaxed text-center ">
              I write code and I make youtube videos I like to make videos
              related to code and tech in my free time. I also lead a few tech
              teams in startups, help in hiring talent for companies. I am also
              on a part time traveller, with 31 countries checked off so far!
            </p>
            <div className="flex justify-center mt-12 space-x-12 items-center cursor-pointer">
              <BsInstagram className="h-7 w-7 lg:h-8 lg:w-8 hover:text-pink-500 transition-all duration-150" />
              <BsFacebook className="h-7 w-7 lg:h-8 lg:w-8 hover:text-blue-700 transition-all duration-150" />
              <BsTwitter className="h-7 w-7 lg:h-8 lg:w-8 hover:text-blue-400 transition-all duration-150" />
              <BsYoutube className="h-7 w-7 lg:h-8 lg:w-8 hover:text-red-600 transition-all duration-150" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 ">
        <div className="px-4 md:px-14 lg:px-24 flex flex-col w-full items-center mt-12">
          <h1 className="text-2xl font-bold md:text-3xl">Community Groups</h1>
          <div className="flex flex-col items-center justify-center md:grid md:grid-cols-3 md:px-20 md:justify-items-center md:gap-x-12 mt-6 gap-y-6">
            <ExploreGroup />
            <ExploreGroup />
            <ExploreGroup />
            <ExploreGroup />
            <ExploreGroup />
          </div>
        </div>
      </section>
      {/* live Community feed */}
      <section className="mt-14 px-4 lg:px-52  sm:px-8 md:px-24 h-1/2 mb-12">
        <h1 className="font-bold text-2xl text-center mb-14 md:text-3xl">
          Community Feed
        </h1>
        <div className="bg-blue-50 px-4 md:px-16 sm:px-8 rounded-xl py-10 md:py-16">
          <h2 className="pt-4 font-medium">
            Recent Chats From Groups{" "}
            <ChevronDownIcon className="inline h-5 w-5" />{" "}
          </h2>
          {/* message */}
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </div>
      </section>
      {/* Frequently asked Quesions */}
      <section className="px-10 py-12 mb-14 md:px-24 lg:px-52 ">
        <h1 className="text-center font-bold text-2xl md:text-3xl">
          Frequently asked Quesions
        </h1>
        <h2 className="text-center mt-4 mb-10 md:mb-16">
          Have questions? we’re here to help.
        </h2>
        <Faq
          answer={
            "Yes, u can try for 30 days login to the site and apply for trail without card"
          }
          show={true}
        />
        <Faq
          answer={
            "Yes, u can try for 30 days login to the site and apply for trail without card"
          }
        />
        <Faq
          answer={
            "Yes, u can try for 30 days login to the site and apply for trail without card"
          }
        />
        <Faq
          answer={
            "Yes, u can try for 30 days login to the site and apply for trail without card"
          }
        />
      </section>
      {/* FOOTER */}
      <footer className="px-4 md:px-24 lg:px-52  sm:px-10 flex items-center justify-between pb-12">
        <div className="w-1/2">
          <img src={pensil} alt="" className="cursor-pointer" />
          <p className="text-sm my-4">
            &#169; Pensil. All Rights Reserved. <br /> Made with ❤️ from India‍
          </p>
          <p className="text-sm my-4">Privacy Policy Terms & Conditions</p>
        </div>
        <div className="space-x-8 md:space-x-10">
          <button className="border  px-3 py-1 md:px-4 text-sm md:text-base  rounded-full text-primaryBlue font-bold border-primaryBlue hover:bg-primaryBlueLight hover:text-white transition-all duration-200 hover:border-primaryBlueLight">
            Preview
          </button>
          <button className="bg-primaryBlue px-3 md:px-4 py-1 text-sm md:text-base rounded-full text-white font-bold hover:bg-primaryBlueLight transition-all duration-200">
            Publish
          </button>
        </div>
      </footer>
    </>
  );
};

export default Home;
