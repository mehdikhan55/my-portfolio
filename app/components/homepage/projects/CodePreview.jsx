// @flow strict

import React from 'react';
import Link from 'next/link';


const CodePreview = ({ project }) => {


    // Spliting the description by newline character '\n'
    const descriptionLines = project.description.split('\n');


    return (
        <div className=" border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base ">
                <div className="blink">
                    <span className="mr-2 text-pink-500">const</span>
                    <span className="mr-2 text-white">project</span>
                    <span className="mr-2 text-pink-500">=</span>
                    <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                    <span className="text-gray-400">{`'`}</span>
                    <span className="text-amber-300">{project.name}</span>
                    <span className="text-gray-400">{`',`}</span>
                </div>
                <div className='lg:ml-8 ml-4'>
                    <span className=" mr-2 text-white">subTitle:</span>
                    <span className="text-gray-400">{`'`}</span>
                    <span className=" text-orange-400">{project.subTitle}</span>
                    <span className="text-gray-400">{`',`}</span>
                </div>

                <div className="ml-4 lg:ml-8 mr-2">
                    <span className=" text-white">tools:</span>
                    <span className="text-gray-400">{` ['`}</span>
                    {
                        project.tools.map((tag, i) => (
                            <React.Fragment key={i}>
                                <span className="text-amber-300">{tag}</span>
                                {
                                    project.tools.length - 1 !== i &&
                                    <span className="text-gray-400">{`', '`}</span>
                                }
                            </React.Fragment>
                        ))
                    }
                    <span className="text-gray-400">{"],"}</span>
                </div>
                <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
                    <span className="text-orange-400">{project.role}</span>
                    <span className="text-gray-400">,</span>
                </div>

                <div className="ml-4 lg:ml-8 mr-2">
                    <span className="text-white">Description:</span>
                    {/* <span className="text-cyan-400">{' ' + `${project.description}`}</span> */}
                    <span className='text-cyan-400'>&quot;</span>
                    {descriptionLines.map((line, index) => (
                        <p key={index} className="text-cyan-400 ml-4">{line}</p>
                    ))}
                    <span className='text-cyan-400'>&quot;</span>
                    <span className="text-gray-400">,</span>
                </div>

                <div className="ml-4 lg:ml-8 mr-2">
                    <span className="text-white">Preview:</span>
                    <span className="text-orange-400 ">{' '} <Link className='underline' target='_blank' href={`${project.demo}`}>live preview</Link></span>
                    <span className="text-gray-400">,</span>
                </div>
                <div><span className="text-gray-400">{`};`}</span></div>
            </code>
        </div>

    )
}

export default CodePreview;