import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { FaLink } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
       <motion.h1 
       whileInView={{opacity:1,y : 0}}
       initial= {{ opacity: 0, y : -100}}
       transition={{duration : 1}}
       className='my-20 text-center text-4xl bg-gradient-to-r from-teal-100 to-blue-500 hover:from-pink-500 hover:to-orange-500 bg-clip-text tracking-tight text-transparent'> Projects</motion.h1>
        {PROJECTS.map((project,index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                  whileInView={{opacity:1,x : 0}}
                  initial= {{ opacity: 0, x : -100}}
                  transition={{duration : 1}}
                className='w-full lg:w-1/4'>
                    <img 
                    src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded'
                    />
                </motion.div>
                <motion.div
                  whileInView={{opacity:1,x : 0}}
                  initial= {{ opacity: 0, x : 100}}
                  transition={{duration : 1.5}}
                className='w-full max-w-2xl lg:w-3/4'>
                  <div className="m-2 flex items-center justify-start gap-4 text-3xl">
                  <a href={project.link} target='_blank'> {project.title}</a>
        <a href={project.link} target="_blank"><abbr title="Link"><FaLink /></abbr></a>
            <a href={project.gitHubLink} target="_blank"><abbr title="GitHub"><FaGithub /></abbr></a>
        </div>
          
                   <p className='mb-4 text-slate-200'>
                    {project.description}
                   </p>
                   
                   {project.technologies.map((tech,index) => (
                    <span key={index} className='mr-2 rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                   ))}
                </motion.div>
            </div>
        ))}
    </div>
  )
}

export default Projects