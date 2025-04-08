"use client"
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import HeroImg from "@/assets/hero.svg";
// import Project1Img from "@/assets/project1.png";
import BBImage from "@/assets/bb.png";
import RafImg from "@/assets/raf.png";
import YenImg from "@/assets/yen.png";
import { motion, useAnimate, useScroll } from 'framer-motion'
import { Code, Codesandbox, GitGraph, Github, Globe, Mail, Phone, Server, TrainFrontTunnel } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Share from "@/components/Share";
import { useSmoothScrollTransform } from "@/hooks/useSmoothScroll";

export default function Home() {
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false})
  const [loading, setLoading] = useState(false)
  const { scrollY } = useScroll()
  const reset = useRef<HTMLButtonElement | null>(null)
  const [scope, animate] = useAnimate()
  

  useEffect(() => {
    const animateFn = async () => {
      await animate(scope.current, { bottom: 30, right: 30, opacity: 1 }, { duration: 1 })
      setTimeout(() => {
        animate(scope.current, { bottom: -30, right: 30, opacity: 0 }, { duration: 1 })
      }, 1000)

    }
    if (loading) {
      setTimeout(() => {
        setLoading(false)
        reset?.current?.click()
        animateFn()
      }, 2000)
    }
  }, [loading, animate, scope])

  const y1 = useSmoothScrollTransform(scrollY, [0, 3000], [100, 2700])
  const y2 = useSmoothScrollTransform(scrollY, [0, 3000], [600, -400])
  const y3 = useSmoothScrollTransform(scrollY, [0, 3000], [700, -3500])
  const y4 = useSmoothScrollTransform(scrollY, [0, 3000], [250, -5000])
  const y5 = useSmoothScrollTransform(scrollY, [0, 3000], [400, -1500])
  const y6 = useSmoothScrollTransform(scrollY, [0, 3000], [450, -1500])


  return (
    <>
      <motion.div
        ref={scope}
        style={{
          bottom: -30,
          right: 30,
          opacity: 0,
        }}
        className="fixed bg-background backdrop-blur-xs p-1" 
      >
        Message <span className="text-primary">sent</span>. Will get back to you asap.
      </motion.div>
      <section className="relative grid gap-4 lg:grid-cols-2 p-8 py-8 md:p-16 lg:px-24 xl:py-32">
        <div className="flex flex-col items-start justify-center gap-y-6 z-1 max-w-lg">
          <h1 className="text-xl text-white lg:text-3xl mb-1">
            Crafting <span className="text-primary">beautiful</span> and <span className="text-primary">functional</span> web experiences
          </h1>
          {/* <h1 className="text-xl text-white lg:text-3xl mb-1">
            Nicholas is a <span className="text-primary">web designer</span> and <span className="text-primary">front-end developer</span>  
          </h1> */}
          {/* <span className="text-4xl font-bold text-gray-900 lg:text-6xl"></span> */}
          <span className="text-secondary text-md lg:text-lg">He crafts responsive websites where technologies meet creativity</span>
          <a href="#contact">
              <Button className="relative">
                Contact Me!!
              </Button>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={HeroImg}
            alt="Hero image"
            width={200}
            height={200}
            className="object-cover w-full aspect-auto object-bottom max-w-xl"
          />
          <div className="flex items-center text-xs lg:text-sm gap-3 text-secondary border border-[#ABB2BF] px-2.5 p-1.5"><span className="w-3 h-3 bg-primary"></span> const portfolio = <span className="text-white">inProgress()</span></div>
        </div>
        <motion.div
          style={{
            y: y1,
            left: '5%',
          }}
          transition={{
            duration: 1.5,
            type: 'spring',
            damping: 200
          }}
          className="absolute z-10"
        >
          <Codesandbox className="text-white/10" size={'4rem'} />
        </motion.div>
        <motion.div
          style={{
            y: y2,
            left: '30%',
          }}
          transition={{
            duration: 1.5,
            type: 'spring',
            damping: 200
          }}
          className="absolute z-10"
        >
          <GitGraph className="text-white/10" size={'4rem'} />
        </motion.div>
        <motion.div
          style={{
            y: y3,
            left: '50%',
          }}
          transition={{
            duration: 1.5,
            type: 'spring',
            damping: 200
          }}
          className="absolute z-10"
        >
          <Github className="text-white/10" size={'4rem'} />
        </motion.div>
        <motion.div
          style={{
            y: y6,
            left: '40%',
          }}
          transition={{
            duration: 1.5,
            type: 'spring',
            damping: 200
          }}
          className="absolute z-10"
        >
          <Server className="text-white/10" size={'4rem'} />
        </motion.div>
        <motion.div
          style={{
            y: y4,
            left: '80%',
          }}
          transition={{
            duration: 1.5,
            type: 'spring',
            damping: 200
          }}
          className="absolute z-10"
        >
          <Code className="text-white/10" size={'4rem'} />
        </motion.div>
        <motion.div
          style={{
            y: y5,
            left: '93%',
          }}
          transition={{
            duration: 1.5,
            type: 'spring',
            damping: 200
          }}
          className="absolute z-10"
        >
          <Globe className="text-white/10" size={'4rem'} />
        </motion.div>
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
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50" />
        <p className="text-lg lg:text-xl">5+ Years of experience building the web.</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">With over five years of experience, I&apos;ve had the opportunity to work with agencies, companies, and individuals on a variety of projects — from web design to front-end and back-end development. Feel free to reach out via email for work inquiries</p>
        <div className="flex max-w-4xl items-center justify-center flex-wrap gap-12 place-items-center w-full mt-4 lg:mt-10">
          {[
              { skill: 'NextJs/React', percent: 95 },
              { skill: 'Node/Express', percent: 90 },
              { skill: 'TypeScript', percent: 85 },
              { skill: 'Databases', percent: 80 },
              { skill: 'Git/Github', percent: 90 },
              { skill: 'TailwindCSS', percent: 85 },
          ].map(({ skill, percent }) => (
            <div key={skill} className="flex flex-col gap-6">
              <div className="grid w-40 h-40 text-lg font-medium place-items-center aspect-square relative p-14 rounded-full border-white bg-background">
                <span className="w-full truncate">
                  {percent}%
                </span>
                <AnimateBorder percent={percent} />
              </div>
              <span>{skill}</span>
            </div>
          ))}
        </div>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl mt-3">...and always exploring new tools to build better web experiences.</p>
      </section>
      <section className="py-20 p-8 md:px-16 lg:px-24 flex flex-col gap-5 items-center text-center">
        <h2 className="text-primary">Services</h2>
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50" />
        <p className="text-lg lg:text-xl">Design. Build. Scale.</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">Software Solutions Without Boundaries</p>
        <div className="grid gap-4 lg:gap-20 place-items-center md:grid-cols-2 lg:grid-cols-3 w-full mt-4 lg:mt-10">
          <AnimateService
            title="Web Design"
            desc="Beautiful, user-focused designs that blend creativity with functionality — built to leave lasting impressions"
          />
          <AnimateService
            title="Frontend"
            desc="Interactive, responsive, and accessible interfaces — bringing designs to life with clean code and smooth user experiences."
          />
          <AnimateService
            title="Backend"
            desc="Robust, scalable, and secure systems — building powerful APIs and server-side logic to drive your product."
          />
        </div>
      </section>
      <section className="py-20 p-8 md:px-16 lg:px-24 flex flex-col gap-5 items-center text-center">
        <h2 className="text-primary">Works</h2>
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50" />
        <p className="text-lg lg:text-xl">Some things I&apos;ve built</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">From ideas to impact — here are some projects I&apos;m proud of</p>
        <div className="grid gap-4 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 w-full mt-4 lg:mt-10">
          <AnimateProject link="https://i-sabi.com.ng/" img={BBImage} />
          <AnimateProject link="https://www.rafflenaija.com" img={RafImg} />
          <AnimateProject link="https://www.yenreach.com" img={YenImg} />
        </div>
      </section>
      <section className="py-20 p-8 md:px-16 lg:px-24 flex flex-col gap-5 items-center text-center">
        <h2 className="text-primary">Resume</h2>
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50" />
        <p className="text-lg lg:text-xl">My Journey So Far</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">Education</p>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-28 w-full mt-4 lg:mt-10 relative">
          {
            [
              {
                title: "Niger Delta University",
                sub: 'B.Sc. Mechanical Engineering',
                desc: 'Studied core engineering principles with specialization in thermodynamics and design. Graduated with strong problem-solving and analytical skills.'
              },
              {
                title: "ALX-T Nanodegree (Udacity)",
                sub: "Full Stack Developer",
                desc: "Focused on modern frontend technologies like React and backend technologies like Django. Built projects and explored design best practices."
              },
              {
                title: "freeCodeCamp",
                sub: "Responsive Web Design Certification",
                desc: "Completed 300+ hours of hands-on coding challenges covering HTML, CSS, Flexbox, Grid, and responsive design techniques."
              },
              // {
              //   title: "WorldQuant University",
              //   sub: "Applied Data Science  1 - Scientific Computing and Python ",
              //   desc: "Completed 300+ hours of hands-on coding challenges covering HTML, CSS, Flexbox, Grid, and responsive design techniques."
              // }
            ].map((education, index) => (
            <div key={index} className="lg:grid grid-cols-2 col-span-2">
              <div className={`${index % 2 === 0 ? 'lg:ml-auto lg:flex-row-reverse' : 'col-start-2 order-2'} flex gap-4 text-left lg:items-center items-start max-w-2xl`}>
                <div className={`${index % 2 === 0 ? 'lg:translate-x-1/2' : 'lg:-translate-x-1/2'} w-16 h-16 lg:w-36 lg:h-36 aspect-square rounded-full grid place-items-center relative overflow-clip`}>
                  <motion.div
                    style={{ translateY: '-100%' }}
                    animate={{ translateY: '100%' }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: (index-1)*2, repeatDelay: 4 }}
                    className={`w-16 h-16 lg:w-36 lg:h-36 aspect-square absolute top-0 left-0 bg-linear-to-b from-violet-500 to-fuchsia-500`}
                  />
                  <Image
                    src={HeroImg}
                    alt="d"
                    height={200}
                    width={200}
                    className="w-[95%] h-[95%] m-auto rounded-full bg-background relative"
                  />
                </div>
                <div className={`${index % 2 === 0 ? 'lg:text-right' : ''} flex flex-col gap-2.5`}>
                  <h6 className="text-xs lg:text-sm">{education.title}</h6>
                  <span className="text-white/20 tracking-[0.2em] text-sm lg:text-base">{education.sub}</span>
                  <p className="text-white/70 text-xs mt-2 lg:text-sm">{education.desc}</p>
                </div>
              </div>
            </div>))
          }
          <div
            className="absolute top-0 bottom-0 w-[1px] -translate-x-1/2 bg-white/30 -z-10 h-full left-8 lg:left-1/2 overflow-hidden"
          >
            <motion.div
              initial={{ top: '-10%' }}
              animate={{ top: '100%' }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute h-20 bg-linear-to-b from-violet-500 to-fuchsia-500 w-[1px] lg:-translate-x-1/2 -z-10 lg:left-1/2"
            />
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 p-8 md:px-16 lg:px-24 flex flex-col gap-5 items-center text-center">
        <h2 className="text-primary">Contact</h2>
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50" />
        <p className="text-lg lg:text-xl">Let&apos;s Connect</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">Always open to discussing new projects, creative ideas, or opportunities to be part of your vision</p>
        <form onSubmit={(e) => {
          e.preventDefault()
          setLoading(true)
        }} className="flex flex-col gap-7 lg:gap-10 items-center w-full max-w-3xl text-xs tracking-widest">
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
          <Button type="submit">{loading ? "SENDING ..." :"SEND MESSAGE"}</Button>
          <button ref={reset} type="reset" className="hidden"></button>
        </form>
      </section>
      <section className="py-20 p-8 md:px-16 lg:px-24 flex flex-col gap-5 lg:gap-8 items-center text-center border-t text-sm text-white/70">
        <Share />
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{
                left: [3, -3, 3, -3, 0],
            }}
            transition={{
                duration: 0.8,
                ease: 'linear',
            }}
            target='_blank'
            className='flex gap-3 items-center p-5 text-white/70 relative hover:text-primary'
            href={'mailto:nicholasduadei14@gmail.com'}
          >
            <Mail size={'1rem'} />
            nicholasduadei14@gmail.com
          </motion.a>
          <motion.a
            whileHover={{
                left: [3, -3, 3, -3, 0],
            }}
            transition={{
                duration: 0.8,
                ease: 'linear',
            }}
            target='_blank'
            className='flex gap-3 items-center p-5 text-white/70 relative hover:text-primary'
            href={'tel:+2349033398824'}
          >
            <Phone size={'1rem'} />
            090 333 98824
          </motion.a>
        </div>
        <p className="">Copyright © All rights reserved.</p>
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
         hover: { top: "5%" }, 
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
         hover: { opacity: 1, scale: 1, top: "10%" }, 
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
  link
}: {
  img: StaticImageData
  link: string
}) => {
  return (
    <motion.a
      initial="rest" whileHover="hover" animate="rest"
      variants={{ 
      }}
      transition={{
        duration: 0.3,
        type: "spring",
      }} 
      className="bg-background w-full relative overflow-hidden max-h-screen"
      target="_blank"
      href={link}
    >
      <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/50" />
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
    </motion.a>
  )
}