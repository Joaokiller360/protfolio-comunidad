import { BookText, HomeIcon, UserRound, Rocket } from "lucide-react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiWordpress, SiStrapi, SiFramer } from 'react-icons/si';

export const userName = [
  {
    userName: 'Your Name',
    email: 'yourname@mail.com',
    dev: 'Skill'
  }
]

export const socialMedia = [
  {
    id: 1,
    social: 'Linkedin',
    icon: <FaLinkedin size={18} strokeWidth={2} />,
    link: 'https://linkedin.com/in/joao-barres'
  },
  {
    id: 2,
    social: 'GitHub',
    icon: <FaGithub size={25} strokeWidth={2} />,
    link: 'https://github.com/Joaokiller360'
  }
]

export const about = [
  {
    about: 'About',
    descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  }
]
export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "About",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "#about",
  },
  {
    id: 3,
    title: "Skills",
    icon: <Rocket size={25} color="#fff" strokeWidth={1} />,
    link: "#my-skills",
  },
  {
    id: 4,
    title: "Projects",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "#projects",
  }
];

export const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "TypeScript", icon: <SiTypescript /> },
];

export const projects = [
  {
    title: "Exampol 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tag: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    hrfCode: `#projects`,
    hrfDemo: ``,
    imageUrl: "https://dummyimage.com/420x260",
    imageAlt: "A descriptive image for the button",
  },
  {
    title: "Exampol 2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tag: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    hrfCode: `#projects`,
    hrfDemo: ``,
    imageUrl: "https://dummyimage.com/420x260",
    imageAlt: "A descriptive image for the button",
  },
  {
    title: "Exampol 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tag: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    hrfCode: `#projects`,
    hrfDemo: `/`,
    imageUrl: "https://dummyimage.com/420x260",
    imageAlt: "A descriptive image for the button",
  }
];