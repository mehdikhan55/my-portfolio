// @flow strict
'use state'
import Link from 'next/link';
import * as React from 'react';
import { FaCode } from 'react-icons/fa6';
import { VscPreview } from "react-icons/vsc";
import { useState } from 'react';
import CodePreview from './CodePreview';
import NormalPreview from './NormalPreview';



function ProjectCard({ project }) {

  const [isCodePreview, setIsCodePreview] = useState(false);


  const handleCodePreviewToggle = () => {
    setIsCodePreview(prevState => !prevState);
  };

  return (
    <div className=" box-border flex flex-col items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[5s] flex-1 overflow-y-hidden">


      <div className="  flex-1 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full scr1  ">
        <div className="flex flex-row ">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="px-4 lg:px-8 py-3 lg:py-5 relative  border-b-[2px] border-indigo-900">
          <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
          </div>
          <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
            {project.name}
          </p>
          <div className="flex flex-row space-x-2 lg:space-x-2 absolute top-[30%] right-5  -translate-y-/2">

            <button
              className={`rounded p-1.5 ${isCodePreview ? 'bg-indigo-200' : 'bg-transparent'}`}
              onClick={() => setIsCodePreview(true)}
            >
              <FaCode
                size={18}
                color={isCodePreview ? 'black' : 'white'}
                className='scale-125'
              />
            </button>

            <button
              className={`rounded p-1.5 ${!isCodePreview ? 'bg-blue-200' : 'bg-transparent'}`}
              onClick={() => setIsCodePreview(false)}
            >
              <VscPreview
                size={18}
                color={!isCodePreview ? 'black' : 'white'}
                className='scale-125'
              />
            </button>
          </div>

        </div>

        

        <div className="">
          {(isCodePreview) ? <CodePreview project={project} /> : <NormalPreview project={project} />}
        </div>
      </div>


    </div>
  );
};

export default ProjectCard;