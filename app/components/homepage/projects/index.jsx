'use client'
import React from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className=" pt-14 ">
        <div className="flex flex-col gap-6">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >

            {projectsData.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="w-full mx-auto max-w-3xl flex flex-col min-h-[26rem] lg:min-h-[33rem] max-h-[20rem] lg:max-h-[30rem]  mb-12"
                  > 
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              );
            })}


          </Swiper>

        </div>
      </div>
    </div>
  );
};

export default Projects;