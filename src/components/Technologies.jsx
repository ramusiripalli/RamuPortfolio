import { RiReactjsLine } from "react-icons/ri";
import { DiJava } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { SiTailwindcss } from "react-icons/si";
import { SiHono } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa6";
import { SiPrisma } from "react-icons/si";
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial : {y: -10},
  animate: {
    y : [10,-10],
    transition: {
    duration: duration,
    ease : "linear",
    repeat: Infinity,
    repeatType: "reverse"
    }
  }
})


const Technologies = () => {
  return (
    <div>
    <div className=" pb-10">
      <motion.h1 
        whileInView={{opacity:1,y : 0}}
        initial= {{ opacity: 0, y : -100}}
        transition={{duration : 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1,x : 0}}
      initial= {{ opacity: 0, x : -100}}
      transition={{duration : 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants= {iconVariants(2.0)} initial="initial" animate ="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <RiReactjsLine className="text-6xl text-cyan-500"/>
          <p className="text-xs text-center">React</p>
        </motion.div>
        <motion.div
        variants= {iconVariants(3.0)} initial="initial" animate ="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaNodeJs className="text-6xl text-green-500"/>
          <p className="text-xs text-center">Node.js</p>
        </motion.div>
        <motion.div
        variants= {iconVariants(1.0)} initial="initial" animate ="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-6xl text-green-500"/>
          <p className="text-xs text-center">MongoDB</p>
        </motion.div>
        <motion.div
        variants= {iconVariants(4.0)} initial="initial" animate ="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <DiJavascript1 className="text-6xl text-yellow-500"/>
          <p className="text-xs text-center">JavaScript</p>
        </motion.div>
        <motion.div
  variants= {iconVariants(5.0)} initial="initial" animate ="animate"
  className="rounded-2xl border-4 border-neutral-800 p-3">
    <SiExpress className="text-6xl text-yellow-500 "/>
    <p className="text-xs text-center">Express Js</p>
  </motion.div>
        <motion.div
        variants= {iconVariants(2.0)} initial="initial" animate ="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <DiJava className="text-6xl text-blue-600"/>
          <p className="text-xs text-center">Java</p>
        </motion.div>
        <motion.div
        variants= {iconVariants(2.0)} initial="initial" animate ="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaHtml5 className="text-6xl"/>
          <p className="text-xs text-center">HTML</p>
        </motion.div>
        <motion.div
        variants= {iconVariants(2.0)} initial="initial" animate ="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <SiTypescript className="text-6xl text-blue-600 pb-1"/>
          <p className="text-xs text-center">TypeScript</p>
        </motion.div>
        <motion.div
        variants= {iconVariants(2.0)} initial="initial" animate ="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <SiTailwindcss  className="text-6xl text-blue-600 pb-1"/>
          <p className="text-xs text-center">tailwind CSS</p>
        </motion.div>

     
     
      </motion.div>
      
      
      </div>

<div className="border-b border-neutral-800 pb-24">
<motion.h1 
  whileInView={{opacity:1,x : 0}}
  initial= {{ opacity: 0, x : -100}}
  transition={{duration : 1.5}}
className="my-5 text-center text-4xl">  </motion.h1>
<motion.div 
whileInView={{opacity:1,x : 0}}
initial= {{ opacity: 0, x : -100}}
transition={{duration : 1.5}}
className="flex flex-wrap items-center justify-center gap-4">
  <motion.div 
  variants= {iconVariants(3.0)} initial="initial" animate ="animate"
  className="rounded-2xl border-4 border-neutral-800 p-3">
    <SiVisualstudiocode className="text-6xl text-blue-500"/>
    <p className="text-xs text-center">V S Code</p>
  </motion.div>
  <motion.div
  variants= {iconVariants(1.0)} initial="initial" animate ="animate"
  className="rounded-2xl border-4 border-neutral-800 p-3">
    <FaAws className="text-6xl text-yellow-500"/>
    <p className="text-xs text-center">aWS</p>
  </motion.div>
  <motion.div
  variants= {iconVariants(4.0)} initial="initial" animate ="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4">
    <FcLinux className="text-6xl text-green-500"/>
    <p className="text-xs text-center">Linux</p>
  </motion.div>
  <motion.div
  variants= {iconVariants(2.0)} initial="initial" animate ="animate"
  className="rounded-2xl border-4 border-neutral-800 p-3">
    <SiHono className="text-6xl text-orange-500"/>
    <p className="text-xs text-center">Hono</p>
  </motion.div>
  <motion.div
  variants= {iconVariants(5.0)} initial="initial" animate ="animate"
  className="rounded-2xl border-4 border-neutral-800 p-3">
    <FaCloudflare className="text-6xl text-orange-700 "/>
    <p className="text-xs text-center">CLOUDFLARE</p>
  </motion.div>
  <motion.div
  variants= {iconVariants(2.0)} initial="initial" animate ="animate"
  className="rounded-2xl border-4 border-neutral-800 p-3">
    <SiPrisma className="text-6xl"/>
    <p className="text-xs text-center">Prisma</p>
  </motion.div>


</motion.div>


</div>

</div>
  )
}

export default Technologies;
