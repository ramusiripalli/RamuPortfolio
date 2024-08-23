import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

function Navbar(){
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center"> 
            
            <h6 className="text-5xl animate-spin">RS</h6>
        </div>
        <div className="m-8 flex items-center justify-center gap-6 text-4xl">
        <a href="https://drive.google.com/file/d/1PzNMcyAU8WCpqVcOgoiHZEmh4aV6KKGh/view?usp=sharing" target="_blank" className="animate-bounce w-6 h-6"><abbr title="Resume"><FaFileDownload /></abbr></a>
            <a href="https://www.linkedin.com/in/ramu-siripalli-3711bb119/" target="_blank" className="animate-bounce w-6 h-6"><abbr title="Linked In"><FaLinkedin /></abbr></a>
            <a href="https://github.com/ramusiripalli" target="_blank" className="animate-bounce w-6 h-6"><abbr title="GitHub"><FaGithub /></abbr></a>
            <a href="https://leetcode.com/u/Ramu2772/" target="_blank" className="animate-bounce w-6 h-6"><abbr title="Leetcode"><TbBrandLeetcode /></abbr></a>
        </div>
    </nav>
};

export default Navbar;