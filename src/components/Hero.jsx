import { HERO_CONTENT } from '../constants/index'
import profilePic from '../assets/softwareDev.jpg'
import { motion } from "framer-motion"
import { HiDocumentDownload } from 'react-icons/hi'
 
const container = (delay) => ({
  hidden: {x: -100,opacity:0 },
  visible: {
    x: 0,
    opacity:1,
    transition: {duration:0.5, delay: delay}
  }
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                 <div className="flex flex-col items-center lg:items-start">
                    <motion.h1   variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-7xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 bg-clip-text tracking-tight text-transparent animate-pulse">Ramu Siripalli</motion.h1>
                     <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl tracking-tight text-transparent animate-bounce w-30 h-9"> Full Stack Developer</motion.span>

                     <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-together '>{HERO_CONTENT}</motion.p>
                </div>
             </div>

            
                <div className='flex justify-center'>
                    <motion.img className='rounded-3xl animate-pulse' initial={{x:100, opacity: 0}} animate= {{x:0,opacity: 1}} transition={{duration:1, delay:1.2}} src={profilePic} alt='Ramu SIripalli'/>
                </div>
            


        </div>


    </div>
  )
}

export default Hero