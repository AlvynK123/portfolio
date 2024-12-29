'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero-pattern bg-no-repeat bg-bottom bg-cover dark:bg-none relative'>
      <div className="container mx-auto">
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Software Engineer
            </div>
            <h1 className='h1 mb-4'>Hello, my name is Alvyn Kwon</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>I am a current Computer Science 
              student at Georgia Tech concentrating in Information Internetworks and Intelligence.
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Button onClick={scrollToContact} className='gap-x-2'>
                Contact Me<Send size={18}/>
              </Button>
              <a href="/resume.pdf" download>
                <Button variant='secondary' className='gap-x-2'>Download CV <Download size={18} /></Button>
              </a>
            </div>
            {/* socials */}
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' 
                     iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom" 
            imgSrc='/hero/converted_image.png'/>
          </div>
        </div> 
      </div>

      <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 bottom-0 pb-18 animate-bounce'> 
        <RiArrowDownSLine className='text-3xl text-primary'/>
      </div>
    </section>
  );
};

export default Hero;