import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with a talent for building robust and scalable web applications. With 3 years of hands-on experience, I've honed my skills in front-end technologies like JavaScript, React, and Next.js, and back-end technologies like Node.js, Express, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 Apr - 2023 Mar",
    role: "Full Stack Developer",
    company: "Alepo Technologies Private Limited",
    description: `Developed and maintained  web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring efficient and scalable solutions. 
    Conducted testing of .apk and .ipa files on multiple devices using BrowserStack, ensuring cross-platform compatibility and performance.
    Designed and generated professional invoices utilizing the BIRT Tool, streamlining the billing process.
    Created and optimized workflows for telecommunication flows, improving operational efficiency and process management.
    Worked directly on the server side using MobaXterm, Visual Studio, PuTTY, and Vim editors, which significantly increased the speed and efficiency of code writing`,
    technologies: ["Javascript", "React.js", "Birt Tool", "mongoDB", "Java", "Joget Work Flows", "My Sql"],
  },
  {
    year: "2020 Feb - 2021 sept",
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions Private Limited",
    description: `Hands-on experience in SharePoint ,React and .NET technologies, acquired through comprehensive training, enhancing proficiency in
developing custom solutions and integrations to support organizational needs and streamline business processes.
Utilized Quest on Demand tool alongside manual migration strategies to facilitate the seamless transition of Microsoft Streams,
O365, and Microsoft Teams environments from Allergan to AbbVie, minimizing disruptions and maximizing productivity for end-user`,
    technologies: ["HTML", "CSS", "SharePoint", "React.js", "JavaScript", "MySql"],
  },
  {
    year: "2019 jun - 2020 jan",
    role: "FULL STACK DEVELOPER INTERN",
    company: "Edii Technoligy Private Limited",
    description: `Developed and maintained web applications using JavaScript, Angular.js, and Node.js. Designed and implemented RESTful APIs for  communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Mongo DB", "Express.js", "AngularJs", "Node.js", "PostGres SQL", "Java"]
  },
  
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    link:"https://www.google.com/",
    gitHubLink:"https://github.com/ramusiripalli/RamuEatsDeliveryApp",
    description:
      "A personal portfolio website that highlights my projects, showcases my skills, and provides easy access to contact information. This site reflects my journey as a developer, offering an in-depth look at my work, achievements, and the technologies I specialize in.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Blogging Application",
    image: project2,
    link:"https://blog-website-ramu-siripalli.vercel.app/",
    gitHubLink:"https://github.com/ramusiripalli/RamuEatsDeliveryApp",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React Js", "Node Js", "Prisma", "PostGres DB", "CloudFlare", "Tailwind CSS", "Hono Js"],
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
  address: "G-306, Mayfair Apartments, Tellapur, Hyderabad- 502032",
  phoneNo: "+91 7888588047 ",
  email: "ramusiripalli2425@gmail.com",
};
