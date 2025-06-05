import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";


export const HERO_CONTENT = `I am a passionate full-stack developer with a talent for building robust and scalable web applications. With 3+ years of hands-on experience, I've honed my skills in front-end technologies like JavaScript, React and back-end technologies like Node.js, Express, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years 6 months of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 Apr - 2023 Mar",
    role: "Full Stack Developer",
    company: "Alepo Technologies Private Limited",
    companyLink:"https://alepo.com/",
    description: `As a passionate and skilled developer, I bring hands-on experience in the MERN stack, complemented by my impactful contributions at Alepo Technologies. My journey has been marked by creating dynamic and client-focused solutions that drive exceptional user engagement and elevate personalized experiences. 
    During my time At Alepo, I spearheaded the development of innovative product features using React.js, resulting in enhanced interactivity and customer satisfaction. My expertise in backend engineering with Node.js enabled me to design and implement robust solutions, achieving a significant 30% improvement in API performance and reducing system response times.
    I played a pivotal role in the successful launch of mission-critical applications, ensuring seamless delivery through meticulous planning, cross-functional collaboration, and efficient execution. Being an active participant in daily Agile development processes, I contributed to sprint planning, conducted code reviews, and collaborated closely with teams to drive the development of new and impactful features.
    With a commitment to excellence and a proactive approach, I thrive on transforming complex challenges into innovative solutions, making me a valuable asset for any forward-thinking organization.
    `,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB", "Express", "Zustand", "Postman", 'Browser Stack']
  },
  {
    year: "2020 Feb - 2021 sept",
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions Private Limited",
    companyLink:"https://www.cognizant.com/us/en",
    description: `During my tenure at Cognizant Technology Solutions, I honed my skills in front-end development by delivering impactful solutions that enhanced user experience and streamlined client operations. My contributions revolved around leveraging modern technologies and collaborative approaches to drive innovation and efficiency
    I developed and maintained React.js applications, crafting dynamic and user-centric interfaces tailored to meet diverse client needs. By focusing on user experience, I ensured that the interfaces were both intuitive and engaging, delivering measurable improvements in client satisfaction.
    In collaboration with cross-functional teams, I designed and implemented new React components, emphasizing responsive and scalable solutions for client-facing platforms. These components were meticulously engineered to adapt seamlessly to various use cases and devices.
    A significant aspect of my role involved working closely with back-end developers to integrate RESTful APIs, enabling efficient data exchange and functionality. Additionally, I implemented state management using Zustand, ensuring a seamless and consistent data flow across the applications.
    Recognizing the need for modernization, I spearheaded efforts to refactor legacy front-end code. By transitioning traditional systems to modern React frameworks, I enhanced code maintainability and efficiency, positioning client systems for long-term success.
    This experience at Cognizant allowed me to merge technical expertise with collaborative problem-solving, making meaningful contributions to complex, high-impact projects.
    `,
    technologies: ["Mongo DB", "Express.js", "AngularJs", "Node.js", "Share Point", "MVC architecture", "My SQL"]
  },
  {
    year: "2019 july - 2020 jan",
    role: "MERN DEVELOPER INTERN",
    company: "Edii Technoligy Private Limited",
    companyLink:"https://edii.in/",
    description: `During my time at EDII Technology Solutions, I played a key role in shaping the MERN stack architecture to deliver robust and user-focused platforms that drive meaningful engagement and operational efficiency. My work revolved around full-stack development, innovative problem-solving, and cross-functional collaboration.
    I developed and optimized the EDII platform's full-stack infrastructure, specifically enhancing communication between schools and parents. This resulted in a remarkable 30% boost in user engagement, showcasing my ability to translate complex requirements into impactful solutions.
    To ensure the platform's reliability and efficiency, I integrated and automated API testing workflows using Swagger and Postman. By collaborating with cross-functional teams, I streamlined communication systems, achieving a 25% increase in overall efficiency. This effort exemplified my commitment to delivering high-quality, scalable solutions.
    Working within the MERN stack framework, I designed and implemented dynamic, user-centric front-end interfaces and scalable back-end solutions. This cohesive approach ensured seamless data flow and optimized performance, contributing to a highly responsive and engaging platform experience.
     My tenure at EDII Technology Solutions highlights my ability to innovate and deliver results within the MERN stack ecosystem, making a measurable impact on user satisfaction and operational effectiveness.
    `,
    technologies: ["Mongo DB", "Express.js", "AngularJs", "Node.js", "Swagger" , "Java", "PostGreSQL"]
  },
  
];

export const PROJECTS = [
  {
    title: "Udyoga Setu Job Portal",
    image: project8,
    link:"https://udyogasetu.vercel.app/",
    gitHubLink:"https://github.com/ramusiripalli/JobsFinder",
    description:
      `UdyogaSetu is a full-stack job-aggregation platform that brings together openings from LinkedIn, Naukri, Indeed, AngelList, Internshala and more into a single, responsive interface. Built with React (Vite + Tailwind CSS + Framer Motion) on the front end and Node.js/Express + MongoDB on the back end, it features:

🔹 Unified Job Feed:  
  Automatically pulls postings from multiple portals so users never have to juggle tabs.

🔹 Real-Time Alerts:  
  Sends Markdown-formatted Telegram notifications (and WhatsApp messages via Twilio) whenever a new job is added.

🔹 Role-Based Dashboards:  
  • Admin: Create, edit, or delete jobs; view total counts and the latest six postings in card form; browse all jobs in a sortable list.  
  • User: Filter by location, portal, or title; see “Jobs Posted” metrics; apply directly via “Apply Now” buttons that link to the original listing.

🔹 Secure Auth:  
  Bcrypt-hashed passwords, JWT-based login/register, and an “isAdmin” middleware guard restricts job-management routes.

🔹 Responsive Design:  
   Mobile-first layouts, a collapsible sidebar for small screens, and fluid grid cards ensure a polished experience on any device.
  
      `,
    technologies: ["Node.js", "Express.js", "React","MongoDB", "Tailwind CSS","clerk","Cloudinary","shadcn/ui"],
  },
  {
    title: "Ram Music Player",
    image: project5,
    link:"https://music-ramu.onrender.com/",
    gitHubLink:"https://github.com/ramusiripalli/MusicPlayer_RamuSiripalli",
    description:
      `I designed and developed a sophisticated music player application that combines modern technology with an intuitive user experience. Built using the MERN stack with TypeScript, the platform is both robust and scalable, ensuring exceptional performance and maintainability.

The application features a sleek and responsive user interface, meticulously styled with Tailwind CSS to deliver a visually appealing and seamless experience across devices. Authentication is securely managed through Google login integration via Clerk, providing a hassle-free and secure way for users to access the platform with reliable token verification and user management.

To handle media assets effectively, the platform utilizes Cloudinary for the storage and management of MP3 files and album images, ensuring efficient and scalable media delivery. The application is hosted on Render, offering a dependable and high-performance deployment environment.

A key highlight of the application is its Admin Dashboard, which empowers administrators to add new songs and albums effortlessly. The dashboard also provides insightful analytics and statistics on user interactions and application performance, enabling data-driven decision-making and continuous improvement.

This music player application reflects my ability to deliver full-stack solutions that blend cutting-edge technology with user-focused design, resulting in a feature-rich and impactful platform.
      `,
    technologies: ["Node.js", "Express.js", "React","MongoDB", "Tailwind CSS","clerk","Cloudinary","shadcn/ui"],
  },
  {
    title: "XOXO -Blink Tic Tac Toe",
    image: project7,
    link:"https://blink-tac-toe-game-react.vercel.app/",
    gitHubLink:"https://github.com/ramusiripalli/blink-tac-toe-game-react",
    description:
      `Blink Tic Tac Toe is my modern twist on the timeless Tic Tac Toe experience, 
      built from the ground up with Vite, React, and Tailwind CSS. Instead of the traditional X’s and O’s, each player 
      selects an emoji category—Player 1 in cyan and Player 2 in pink—adding a fun, 
      personalized flair to every match. I implemented a “vanishing rule” so that emojis disappear after placement, forcing players to think ahead and adapt to an ever-changing board. 
      To help users get started, there’s a built-in Help feature that clearly explains the rules and demonstrates gameplay strategies. The game also tracks wins on a dynamic scoreboard: when a player claims victory, their winning path lights up in yellow, the interface automatically navigates to the score page, and a celebratory confetti animation (powered by react-confetti) showers the winner’s name. Every aspect of styling—from responsive layouts to subtle hover effects—was crafted with Tailwind CSS for a clean, engaging look. This project showcases my ability to blend classic game design with modern front-end technologies, prioritizing both fun and clarity in the user experience.
      `,
    technologies: ["React","Tailwind CSS"],
  },
  {
    title: "E-Commerce",
    image: project6,
    link:"https://e-commerce-ipl.onrender.com/",
    gitHubLink:"https://github.com/ramusiripalli/E_Commerce_IPL/",
    description:
      "This e-commerce application is designed specifically to cater to IPL cricket enthusiasts, offering a platform to buy sports goods and merchandise themed around IPL franchises. The project features a robust structure with clear user roles and a streamlined workflow for managing and purchasing products.",
    technologies: ["Node.js", "Express.js", "React","MongoDB", "Tailwind CSS","Redis","Cloudinary"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    link:"https://ramusiripalli.vercel.app/",
    gitHubLink:"https://github.com/ramusiripalli/RamuPortfolio",
    description:
      "A personal portfolio website that highlights my projects, showcases my skills, and provides easy access to contact information. This site reflects my journey as a developer, offering an in-depth look at my work, achievements, and the technologies I specialize in.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Blogging Application",
    image: project2,
    link:"https://blog-website-ramu-siripalli.vercel.app/",
    gitHubLink:"https://github.com/ramusiripalli/BlogWebsiteRamuSiripalli",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React Js", "Node Js", "Prisma", "PostGres SQL", "CloudFlare", "Tailwind CSS", "Hono Js"],
  },
  {
    title: "Hunger Kart",
    image: project3,
    link:"https://hungerkart.vercel.app/",
    gitHubLink:"https://github.com/ramusiripalli/RamuEatsDeliveryApp",
    description:
      "A food and grocery delivery website designed with full web accessibility, ensuring even visually impaired users can navigate and order with ease.",
    technologies: ["HTML", "CSS", "Javascript", "Vercel"],
  },
  {
    title: "Alexa Weather Skill",
    image: project4,
    link:"https://tinyurl.com/pyjuryet",
    gitHubLink : "https://github.com/ramusiripalli/alexa1",
    description:
      "An Alexa Weather Skill is a custom voice-activated application designed for Amazon's Alexa-enabled devices. This skill allows users to get real-time weather updates, forecasts, and weather-related information simply by asking Alexa. It can provide details such as current temperatures, humidity levels, wind speeds, and future weather predictions for specific locations. Users can also set up notifications for severe weather alerts or daily weather summaries, making it a convenient tool for staying informed about the weather conditions. It Supports major city weather updates such as Vishakapatnam, Bengaluru, Mumbai, Hyderabad, chennai, Goa and Delhi",
    technologies: ["HTML", "CSS", "Javascript", "Node Js", "Swagger"],
  },
];

export const CONTACT = {
  address: "EWS-489 ,Road Number 2, KPHB-Phase 1, Hyderabad - 500072",
  phoneNo: "+91 7888588047 ",
  email: "ramusiripalli2425@gmail.com",
};
