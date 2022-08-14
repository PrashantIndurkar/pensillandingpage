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
import jsGroup from "../assets/Group.png";
import FrontEndGroup from "../assets/FrontEndGroup.png";
import NextGroup from "../assets/NextGroup.png";
import ReactGroup from "../assets/ReactGroup.png";
import TypeGroup from "../assets/TypeGroup.png";
import { motion } from "framer-motion";
import { fadeIn, boxAnimation, loadText, navMotion } from "../motion/Variants";
import Faq from "./Faq";
import Chat from "./Chat";
import confImg2 from "../assets/LiveConf_teemu-paananen-bzdhc5b3Bxs-unsplash.jpg";

const Home = () => {
  return (
    <>
      <motion.nav
        variants={navMotion}
        initial={"offScreen"}
        animate={"onScreen"}
        className="flex border-b-2 px-4 justify-between h-[8vh] items-center md:px-14 lg:px-20"
      >
        <motion.img
          variants={navMotion}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.9, ease: "easeIn" },
          }}
          src={communityLogo}
          alt=""
          className="h-10 w-10 cursor-pointer"
        />
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="bg-primaryBlue rounded-full font-bold px-4 py-1.5 text-white"
        >
          Login
        </motion.button>
      </motion.nav>
      <motion.header variants={fadeIn} initial="offScreen" animate="onScreen">
        <div className="px-4 sm:px-8 flex justify-center items-center flex-col h-[50vh] space-y-10">
          <motion.h1
            className="text-center tracking-wide font-black lg:text-5xl text-pensilBlack text-3xl sm:text-4xl md:text-5xl"
            variants={fadeIn}
          >
            JavaScript Community
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-center leading-relaxed tracking-wide md:w-4/5 lg:w-3/5"
          >
            Welcome to Javascript community. The best Js community for Front end
            Developers. To Talk make Friends around js Eco-System.
          </motion.p>
          <motion.a
            variants={fadeIn}
            whileHover={{ scale: 1.1 }}
            href="#"
            className="text-primaryBlueLight hover:text-primaryBlue transition duration-150 font-bold tracking-wide text-xl sm:text-2xl md:text-3xl"
          >
            Let's Join <ChevronRightIcon className="h-7 w-7 inline" />
          </motion.a>
        </div>
        <motion.div
          variants={fadeIn}
          className="px-6 sm:px-8 md:px-14 lg:px-40 flex justify-center items-center"
        >
          <img src={gif} alt="community Gif" className="rounded-xl " />
        </motion.div>
      </motion.header>
      {/* Features about community sections  */}
      <section className="sectionBackground flex flex-col items-center md:mt-16 px-4 space-y-6 mt-12 pb-24">
        <motion.div
          variants={loadText}
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: true, amount: 1 }}
          className="flex items-center flex-col"
        >
          <motion.h2
            variants={loadText}
            className="text-2xl pt-20 text-center font-bold md:text-3xl lg:pt-20"
          >
            Highly Active JavaScript Community
          </motion.h2>
          <motion.p
            variants={loadText}
            className="pt-10 text-center pb-14 w-4/5 md:w-4/5 lg:w-3/6"
          >
            This is the best and most highly active community in front end
            development and you can be a part of this community just click on{" "}
            <span className="font-medium text-primaryBlueLight cursor-pointer">
              Join
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={boxAnimation}
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col justify-center items-center md:grid md:grid-cols-3 justify-items-center gap-y-10 lg:gap-y-14 md:px-12 lg:px-36 xl:px-48 "
        >
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
        </motion.div>
      </section>
      {/* community Owner Name section */}
      <section>
        <motion.div
          variants={fadeIn}
          initial="offScreen"
          whileInView={"onScreen"}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-green-50 flex flex-col md:flex-row py-20 justify-center items-center px-4 md:px-10 lg:px-28 gap-x-6"
        >
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center justify-center md:w-1/3 "
          >
            <img src={hitesh} alt="" className="h-72  rounded-lg " />
            <h2 className="mt-8 text-xl font-bold text-center">
              Hitesh Choudhary
            </h2>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="pt-12 md:pt-0 w-1/2 flex flex-col justify-center items-center "
          >
            <h1 className="text-3xl mb-6 font-semibold">About me</h1>
            <p className="leading-relaxed text-center ">
              I write code and I make youtube videos I like to make videos
              related to code and tech in my free time. I also lead a few tech
              teams in startups, help in hiring talent for companies. I am also
              on a part time traveller, with 31 countries checked off so far!
            </p>
            <div className="flex justify-center mt-12 space-x-12 items-center cursor-pointer">
              <BsInstagram className="h-7 w-7 lg:h-8 lg:w-8 text-pink-500 hover:text-pink-600 transition-all duration-150" />
              <BsFacebook className="h-7 w-7 lg:h-8 lg:w-8 text-blue-700 hover:text-blue-800 transition-all duration-150" />
              <BsTwitter className="h-7 w-7 lg:h-8 lg:w-8 text-blue-400 hover:text-blue-500 transition-all duration-150" />
              <BsYoutube className="h-7 w-7 lg:h-8 lg:w-8 text-red-600 hover:text-red-700 transition-all duration-150" />
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section className="py-12 ">
        <motion.div
          variants={boxAnimation}
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: true, amount: 0.2 }}
          className="md:px-14 lg:px-24 flex flex-col w-full items-center mt-12"
        >
          <h1 className="text-2xl font-bold md:text-3xl">Community Groups</h1>
          <div className="flex flex-col items-center justify-center md:grid md:grid-cols-3 md:px-10 justify-items-center md:gap-x-12 mt-6 gap-y-6">
            <ExploreGroup GroupImage={jsGroup} GroupName={"Javascript Group"} />
            <ExploreGroup
              GroupImage={FrontEndGroup}
              GroupName={"Front End Group"}
            />
            <ExploreGroup
              GroupImage={ReactGroup}
              GroupName={"React.js Group"}
            />
            <ExploreGroup GroupImage={NextGroup} GroupName={"Next.js Group"} />
            <ExploreGroup
              GroupImage={TypeGroup}
              GroupName={"TypeScript Group"}
            />
          </div>
        </motion.div>
      </section>
      {/* live Community feed */}
      <motion.section
        variants={boxAnimation}
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-14 px-4 lg:px-36 sm:px-8 md:px-24 h-1/2 mb-12"
      >
        <motion.h1
          variants={boxAnimation}
          className="font-bold text-2xl text-center mb-14 md:text-3xl"
        >
          Community Feed
        </motion.h1>
        <div className="bg-blue-50 shadow-md px-4 md:px-16 sm:px-8 rounded-xl border">
          <h2 className="pt-12 font-medium">
            Recent Chats From Groups{" "}
            <ChevronDownIcon className="inline h-5 w-5" />{" "}
          </h2>
          {/* message */}
          <Chat
            question={
              "Can anyone suggest how much DSA is required to crack interview and work at top product based company as a front end developer??"
            }
          />
          <Chat
            question={
              "    How to navigate to home page while user refresh browser window ?"
            }
          />
          <Chat
            question={
              "How do i get previous route in NEXT.js? I want to know what was my previous route and based on that i want to do some redirection.I definately can use getServerSideProps but I have to do it in a component no in a page"
            }
          />
          <Chat
            question={
              "How to use vanillaJS design in NEXTJS? hello, I have got a nightsky design from internet and i wanted to use this in nextjs how can i do it anyone can help?"
            }
          />
          <button
            href="#"
            className="flex w-fit justify-center px-2 py-1 mx-auto my-8 items-center text-pensilBlack border  border-pensilBlack hover:bg-pensilBlack hover:text-white transition duration-150 "
          >
            See All
          </button>
        </div>
      </motion.section>
      <motion.section
        variants={loadText}
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.5 }}
        className="px-4 mt-32 pb-12 bg-[#faf9f9] text-pensilBlack"
      >
        <motion.h1
          variants={loadText}
          className="text-center font-bold pt-20 text-2xl md:text-3xl"
        >
          <span className="text-3xl lg:text-4xl align-middle">🔴</span>{" "}
          Community Live Events
        </motion.h1>

        <motion.div variants={loadText} className="px-6 md:px-14 lg:px-36">
          <img
            src={confImg2}
            className="rounded-xl mt-12 object-cover  lg:h-[40rem]  w-full block"
            alt="chris-montgomery-smgTvepind4-unsplash"
          />

          <motion.div
            variants={loadText}
            initial={"offScreen"}
            whileInView={"onScreen"}
            viewport={{ once: true, amount: 1 }}
            className="mt-12 mx-6 mb-12  lg:flex gap-x-6 md:mx-auto"
          >
            <motion.div variants={loadText}>
              <h1
                variants={loadText}
                className="font-bold text-xl mb-6 mt-10 tracking-wider"
              >
                Immersive Experience
              </h1>
              <p className="tracking-wide">
                Conduct Live sessions or webinar, get the best audio video
                quality
              </p>
            </motion.div>

            <motion.div variants={loadText}>
              <h1
                variants={loadText}
                className="font-bold text-xl mb-6 mt-10 tracking-wider"
              >
                Host Event with Live QnA
              </h1>
              <p className="tracking-wide">
                Invite hosts, moderator & get the best live experience for your
                community
              </p>
            </motion.div>

            <motion.div variants={loadText}>
              <h1 className="font-bold text-xl mb-6 mt-10 tracking-wider">
                Share your live recordings
              </h1>
              <p className="tracking-wide">
                Share or post recording on Youtube, Facebook, Vimeo, or any
                other platform
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      {/* Frequently asked Quesions */}
      <motion.section
        variants={boxAnimation}
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.5 }}
        className="px-10 py-20 mb-14 md:px-24 lg:px-52 "
      >
        <motion.h1
          variants={boxAnimation}
          className="text-center font-bold text-2xl md:text-3xl"
        >
          Frequently asked Quesions
        </motion.h1>
        <motion.h2
          variants={boxAnimation}
          className="text-center mt-4 mb-10 md:mb-16"
        >
          Have questions? we’re here to help.
        </motion.h2>
        <Faq
          question={"Is there free trail available?"}
          answer={
            "Yes, u can try for 30 days login to the site and apply for trail without card"
          }
        />
        <Faq
          question={"Can I allow my friend to access content?"}
          answer={
            "Yes, u can try for 30 days login to the site and apply for trail without card"
          }
        />
        <Faq
          question={"How to ask questions in the group?"}
          answer={
            "Yes, u can try for 30 days login to the site and apply for trail without card"
          }
        />
        <Faq
          question={"Can i join all the groups?"}
          answer={
            "Yes, u can try for 30 days login to the site and apply for trail without card"
          }
        />
      </motion.section>
      {/* FOOTER */}
      <motion.footer
        variants={boxAnimation}
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.7 }}
        className="px-6 md:px-24 lg:px-52  sm:px-10 flex items-center justify-between pb-12"
      >
        <div className="w-1/2">
          <img src={pensil} alt="" className="cursor-pointer" />
          <p className="text-sm my-4">
            &#169; Pensil. All Rights Reserved. <br />{" "}
            <span className="font-bold text-[#516ee1]">
              Made with ❤️ from India‍
            </span>
          </p>
          <p className="text-sm my-4">Privacy Policy Terms & Conditions</p>
        </div>
        <div className="flex flex-col md:flex-row gap-x-12 gap-y-8">
          <button className="border  px-3 py-1 md:px-4 text-sm md:text-base  rounded-full text-primaryBlue font-bold border-primaryBlue hover:bg-primaryBlueLight hover:text-white transition-all duration-200 hover:border-primaryBlueLight">
            Preview
          </button>
          <button className="bg-primaryBlue px-3 md:px-4 py-1 text-sm md:text-base rounded-full text-white font-bold hover:bg-primaryBlueLight transition-all duration-200">
            Publish
          </button>
        </div>
      </motion.footer>
    </>
  );
};

export default Home;
