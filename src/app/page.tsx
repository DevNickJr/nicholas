"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImg from "@/assets/hero.svg";

export default function Home() {

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
        <h2>About Me</h2>
        <div className="w-full h-[1px] scale-x-2 bg-secondary/50"></div>
        <p className="text-lg lg:text-xl">6 Years of experience building the web.</p>
        <p className="text-xs lg:text-sm text-secondary max-w-2xl">Over eight years in business, I have had a chance to work on a variety of projects, with agencies, companies or even individuals.Branding, web design, UI/UX design and front-end development. For work inquires send me an Email</p>
      </section>
      {/* <motion.div
        style={{ transformOrigin: "bottom right" }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
      >
        Scale from Bottom Right
      </motion.div> */}
      <div className="flex flex-col gap-6 p-6">
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
        <span>fdgfhjgf</span>
      </div>
    </>
  );
}
