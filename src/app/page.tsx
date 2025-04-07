"use client"
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import HeroImg from "@/assets/hero.svg";
import Project1Img from "@/assets/project1.png";
import { motion } from 'framer-motion'
import { TrainFrontTunnel } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false})

  return (
    <>
      <section className="relative grid lg:h-screen lg:grid-cols-2 p-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-start justify-center gap-y-6 z-1 max-w-lg">
          <h1 className="text-xl text-white lg:text-3xl mb-1">
            Nicholas is a <span className="text-primary">web designer</span> and <span className="text-primary">front-end developer</span>  
          </h1>
          {/* <span className="text-4xl font-bold text-gray-900 lg:text-6xl"></span> */}
          <span className="text-secondary text-md lg:text-lg">He crafts responsive websites where technologies meet creativity</span>
          <Button className="">
            Contact Me!!
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={HeroImg}
            alt="Hero image"
            width={200}
            height={200}
            className="object-cover w-full aspect-auto object-bottom max-w-xl"
          />
          <div className="flex items-center text-xs lg:text-sm gap-3 text-secondary border border-[#ABB2BF] px-2.5 p-1.5"><span className="w-3 h-3 bg-primary"></span> Currently working on <span className="text-white">Portfolio</span></div>
        </div>
        {/* <Image
          src={'/file.svg'}
          alt="BG image"
          width={200}
          height={200}
          className="absolute top-0 left-0 object-contain object-center w-full h-full px-12 py-12 -z-10 transitio"
        /> */}
      </section>
      <section className="py-20 p-8 md:px-16 lg:px-24 flex flex-col gap-5 items-center text-center">
        <Image
          src={HeroImg}
          alt="Hero image"
          width={200}
          height={200}
          className="object-cover h-60 w-60 rounded-full aspect-auto object-bottom mb-3"
        />
        <h2 className="text-primary">About Me</h2>
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50"></div>
        <p className="text-lg lg:text-xl">6 Years of experience building the web.</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">Over six years in business, I have had a chance to work on a variety of projects, with agencies, companies or even individuals. Web design, front-end and backend development. For work inquires send me an Email</p>
        <div className="grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-4 w-full mt-4 lg:mt-10">
          <div className="flex flex-col gap-6">
            <div className="grid text-lg font-medium place-items-center aspect-square relative p-14 rounded-full border-white bg-background">
              95%
              <AnimateBorder percent={95} />
            </div>
            <span>HTML</span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid text-lg font-medium place-items-center aspect-square relative p-14 rounded-full border-white bg-background">
              83%
              <AnimateBorder percent={83} />
            </div>
            <span>HTML</span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid text-lg font-medium place-items-center aspect-square relative p-14 rounded-full border-white bg-background">
              85%
              <AnimateBorder percent={85} />
            </div>
            <span>HTML</span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid text-lg font-medium place-items-center aspect-square relative p-14 rounded-full border-white bg-background">
              80%
              <AnimateBorder percent={80} />
            </div>
            <span>HTML</span>
          </div>
        </div>
      </section>
      <section className="py-20 p-8 md:px-16 lg:px-24 flex flex-col gap-5 items-center text-center">
        <h2 className="text-primary">Services</h2>
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50"></div>
        <p className="text-lg lg:text-xl">What I do</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">I dont have boundaries</p>
        <div className="grid gap-4 lg:gap-20 place-items-center md:grid-cols-2 lg:grid-cols-3 w-full mt-4 lg:mt-10">
          <AnimateService
            title="Web Design"
            desc="Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam."
          />
          <AnimateService
            title="Frontend"
            desc="Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam."
          />
          <AnimateService
            title="Backend"
            desc="Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam."
          />
        </div>
      </section>
      <section className="py-20 p-8 md:px-16 lg:px-24 flex flex-col gap-5 items-center text-center">
        <h2 className="text-primary">Works</h2>
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50"></div>
        <p className="text-lg lg:text-xl">A few of my beloved doings</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus perferendis libero accusantium nisi</p>
        <div className="grid gap-4 lg:gap-12 place-items-center md:grid-cols-2 lg:grid-cols-3 w-full mt-4 lg:mt-10">
          <AnimateProject img={Project1Img} />
          <AnimateProject img={Project1Img} />
          <AnimateProject img={Project1Img} />
        </div>
      </section>
      <section className="py-20 p-8 md:px-16 lg:px-24 flex flex-col gap-5 items-center text-center">
        <h2 className="text-primary">Resume</h2>
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50"></div>
        <p className="text-lg lg:text-xl">People I&apos;ve Worked With</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">Education</p>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-28 w-full mt-4 lg:mt-10 relative">
          <div
            className="absolute top-0 bottom-0 w-[1px] -translate-x-1/2 bg-white/30 -z-10 h-full left-8 lg:left-1/2 overflow-hidden"
          >
            <motion.div
              initial={{ top: '-10%' }}
              animate={{ top: '100%' }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute h-20 bg-linear-to-b from-violet-500 to-fuchsia-500 w-[1px] -translate-x-1/2 -z-10 left-8 lg:left-1/2"
            />
          </div>
          <div className="lg:grid grid-cols-2 col-span-2">
            <div className="flex lg:flex-row-reverse gap-4 text-left lg:items-center items-start max-w-2xl ml-auto">
              <div className="w-16 h-16 lg:w-36 lg:h-36 aspect-square lg:translate-x-1/2 rounded-full grid place-items-center relative overflow-clip">
                <motion.div
                  style={{ translateY: '-100%' }}
                  animate={{ translateY: '100%' }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0, repeatDelay: 4 }}
                  className="w-16 h-16 lg:w-36 lg:h-36 aspect-square absolute top-0 left-0 bg-linear-to-b from-violet-500 to-fuchsia-500"
                />
                <Image
                  src={HeroImg}
                  alt="d"
                  height={200}
                  width={200}
                  className="w-[95%] h-[95%] m-auto rounded-full bg-background relative"
                />
              </div>
              <div className="flex flex-col gap-2.5 lg:text-right">
                <h6 className="text-xs lg:text-sm">AGJJENCY</h6>
                <span className="text-white/20 tracking-[0.2em] text-sm lg:text-base">Full stack Developer</span>
                <p className="text-white/70 text-xs mt-2 lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </div>
            </div>
          </div>
          <div className="lg:grid grid-cols-2 col-span-2">
            <div className="flex gap-4 text-left items-start col-start-2 order-2 lg:items-center max-w-2xl">
              <div className="w-16 h-16 lg:w-36 lg:h-36 aspect-square lg:-translate-x-1/2 rounded-full grid place-items-center relative overflow-clip">
                <motion.div
                  style={{ translateY: '-100%' }}
                  animate={{ translateY: '100%' }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 2, repeatDelay: 4 }}
                  className="w-16 h-16 lg:w-36 lg:h-36 aspect-square absolute top-0 left-0 bg-linear-to-b from-violet-500 to-fuchsia-500"
                />
                <Image
                  src={HeroImg}
                  alt="d"
                  height={200}
                  width={200}
                  className="w-[95%] h-[95%] m-auto rounded-full bg-background relative"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h6 className="text-xs  lg:text-sm">WEBfk</h6>
                <span className="text-white/20 tracking-[0.2em] text-sm lg:text-base">Full stack Developer</span>
                <p className="text-white/70 text-xs mt-2 lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </div>
            </div>
          </div>
          <div className="lg:grid grid-cols-2 col-span-2">
            <div className="flex gap-4 text-left items-start lg:flex-row-reverse lg:items-center max-w-2xl ml-auto">
              <div className="w-16 h-16 lg:w-36 lg:h-36 aspect-square lg:translate-x-1/2 rounded-full grid place-items-center relative overflow-clip">
                <motion.div
                  style={{ translateY: '-100%' }}
                  animate={{ translateY: '100%' }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 4, repeatDelay: 4 }}
                  className="w-16 h-16 lg:w-36 lg:h-36 aspect-square absolute top-0 left-0 bg-linear-to-b from-violet-500 to-fuchsia-500"
                />
                <Image
                  src={HeroImg}
                  alt="d"
                  height={200}
                  width={200}
                  className="w-[95%] h-[95%] m-auto rounded-full bg-background relative"
                />
              </div>
              <div className="flex flex-col gap-2.5 lg:text-right">
                <h6 className="text-xs">WEB AGENCY</h6>
                <span className="text-white/20 tracking-[0.2em] text-sm lg:text-base">Full stack Developer</span>
                <p className="text-white/70 text-xs mt-2 lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 p-8 md:px-16 lg:px-24 flex flex-col gap-5 items-center text-center">
        <h2 className="text-primary">Contact</h2>
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50"></div>
        <p className="text-lg lg:text-xl">A few of my beloved doings</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus perferendis libero accusantium nisi</p>
        <div className="flex flex-col gap-7 lg:gap-10 items-center w-full max-w-3xl text-xs tracking-widest">
          <motion.input 
            type="text"
            className="border-white/30 focus:border-white border-b p-3 w-full focus:outline-none"
            placeholder="NAME"
            initial={{ borderColor: "#ffffff" }} // gray-500
            animate={{ borderColor: isFocused.name ? "#6b7280" : "#ffffff" }} // white or gray
            onFocus={() => setIsFocused(prev => ({ ...prev, name: true }))}
            onBlur={() => setIsFocused(prev => ({ ...prev, name: false }))}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }} 
          />
          <motion.input 
            type="email"
            className="border-white/30 focus:border-white border-b p-3 w-full focus:outline-none"
            placeholder="EMAIL"
            initial={{ borderColor: "#ffffff" }} // gray-500
            animate={{ borderColor: isFocused.email ? "#6b7280" : "#ffffff" }} // white or gray
            onFocus={() => setIsFocused(prev => ({ ...prev, email: true }))}
            onBlur={() => setIsFocused(prev => ({ ...prev, email: false }))}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }} 
          />
          <motion.textarea 
            rows={8}
            className="border-white/30 focus:border-white border-b p-3 w-full focus:outline-none"
            placeholder="MESSAGE"
            initial={{ borderColor: "#ffffff" }} // gray-500
            animate={{ borderColor: isFocused.message ? "#6b7280" : "#ffffff" }} // white or gray
            onFocus={() => setIsFocused(prev => ({ ...prev, message: true }))}
            onBlur={() => setIsFocused(prev => ({ ...prev, message: false }))}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }} 
          />
          <Button>SEND MESSAGE</Button>
        </div>
      </section>
    </>
  );
}



const AnimateBorder = ({
  percent
}: {
  percent: number  
}) => {
  return (
    <motion.div
      style={{
        background: `conic-gradient(white 0%, white 10%, black 90%)`
      }}
      whileInView={'final'}
      variants={{
        final: {
          background: `conic-gradient(white 0%, white ${percent}%, black 80%)`
        }
      }}
      className="absolute -inset-2 rounded-full -z-10"
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    />
  )
}

const AnimateService = ({
  title,
  desc
}: {
  title: string  
  desc: string  
}) => {
  return (
    <motion.div
      initial="rest" whileHover="hover" animate="rest"
      variants={{ 
        hover: { borderColor: "white" }
      }}
      transition={{
        duration: 0.3,
        type: "spring",
      }} 
      className="bg-background flex flex-col items-center w-full aspect-square border border-white/30 gap-6 relative px-8 max-w-xs"
    // className="flex flex-col items-center justify-center w-full aspect-square border border-white/30 p-12 gap-6"
  >
    <motion.div
      className="relative bg-background p-3 rounded-md"
      variants={{
         rest: { top: "35%", translateY: "-50%" }, // center
         hover: { top: 0 }, // move to top
       }}
      transition={{
        duration: 0.5,
        type: "spring",
        ease: "drag",
      }} 
    >
      <TrainFrontTunnel />
    </motion.div>
    <motion.div
      className="relative"
      variants={{
         rest: { top: "40%", translateY: "-50%" }, 
         hover: { top: "15%" }, 
       }}
      transition={{
        delay: 0.05,
        duration: 0.7,
        type: "spring",
        ease: "easeInOut"
      }} 
    >
      {title}
    </motion.div>
    <motion.div
      className="relative text-sm"
      variants={{
         rest: { opacity: 0, scale: 0 }, 
         hover: { opacity: 1, scale: 1, top: "20%" }, 
       }}
      transition={{
        delay: 0.05,
        duration: 0.7,
        type: "spring",
        ease: "easeInOut"
      }} 
    >
      {desc}
    </motion.div>
  </motion.div>
  )
}

const AnimateProject = ({
  img,
}: {
  img: StaticImageData
}) => {
  return (
    <motion.div
      initial="rest" whileHover="hover" animate="rest"
      variants={{ 
      }}
      transition={{
        duration: 0.3,
        type: "spring",
      }} 
      className="bg-background w-full relative overflow-hidden max-h-screen"
    >
      <motion.div
        className="relative bg-background rounded-md"
        variants={{
          rest: { scale: 0.99, }, 
          hover: { scale: 1.05, translateY: 'calc(-100% + 90vh)' },
        }}
        transition={{
          delay: 0.3,
          duration: 4,
          type: "spring",
          ease: "easeInOut",
        }} 
      >
        <Image
          src={img}
          alt="ds"
          height={200}
          width={200}
          className="w-full h-fit"
        />
      </motion.div>
    </motion.div>
  )
}