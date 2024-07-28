// @flow strict

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NormalPreview = ({ project }) => {
    // Splitting the description by newline character '\n' text-[#16f2b3]
    const descriptionLines = (project.description || "").split('\n');


    return (
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-2 lg:py-4">
            <div className=" text-xs md:text-sm lg:text-base flex flex-col items-center">
                <div className="">
                    {project.image &&
                        <Image
                            src={project.image}
                            alt={project.name}
                            width={project.image ? 190 : 0} // default width
                            height={project.image ? 170 : 0} // default height
                            className="object-cover w-[150px] md:w-[180px] lg:w-[190px] h-[130px] md:h-[160px] lg:h-[170px] transition-all duration-300"
                        />
                    }
                </div>
                <div className={`${!project.image && "pt-9"} flex flex-col pt-3`}>
                    <h5 className={`${!project.image && "pb-8"} font-mono text-lg lg:text-3xl text-pink-300 text-center pb-2 leading-tight font-bold`}><b>{project.subTitle}</b></h5>
                    <div className='text-justify text-[#e8fff8]'>
                        {descriptionLines.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>

                </div>
                <div className="tools-area gap-1 pt-3">
                    {
                        project.tools.map((tool, index) => {
                            return (
                                <span key={index} className="text-xs md:text-sm lg:text-sm text-[#16f2b3] bg-[#2d2469] px-2 py-1 rounded-md">{tool}</span>
                            )
                        })
                    }
                </div>

                {project.demo && <Link href={project.demo} target='_blank' className={`mt-4 ${!project.image && "2xl:mt-10 lg:mt-10 mt-10"}  lg:mt-2 2xl:mt-4 bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600`}>
                    <button className="px-1 text-xs md:px-3 py-1 md:py-2 bg-[#0d1224] rounded-full border-none text-center md:text-xs font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out lg:text-sm md:font-semibold flex items-center gap-1 hover:gap-3">
                        <span>Live Preview</span>

                    </button>
                </Link>}
            </div>
        </div>
    );
};

export default NormalPreview;
