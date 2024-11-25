import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Github, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiWordpress, SiStrapi } from 'react-icons/si';

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "Sobre Mi",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "#about",
  },
  {
    id: 3,
    title: "Mis Projectos",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "#projects",
  },
  {
    id: 4,
    title: "Mis Habilidades",
    icon: <Rocket size={25} color="#fff" strokeWidth={1} />,
    link: "#portfolio",
  }
];

export const socialMedia = [
  {
    id: 1,
    social: 'Linkedin',
    icon: <FaLinkedin size={18} strokeWidth={2} />,
    link: 'https://linkedin.com/in/joao-barres'
  },
  {
    id: 2,
    social: 'Linkedin',
    icon: <FaGithub size={25} strokeWidth={2} />,
    link: 'https://github.com/Joaokiller360'
  }
]

export const projects = [
  {
    title: "JB OCESE",
    description: "Una web moderna creada para una empresa.",
    tag: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
    hrfCode: `https://google.com`,
    hrfDemo: `https://jbocese.com`
  },
  {
    title: "Jack Burger",
    description: "Plataforma de menú para un pequeño local.",
    tag: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Strapi", icon: <SiStrapi /> },
    ],
    hrfCode: `https://google.com`,
    hrfDemo: `https://jack-burger.vercel.app`
  },
  {
    title: "Portafolio Para La comunidad",
    description: "Este es un pequeño portafolio que puedes agarrar como inspiracion.",
    tag: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
    hrfCode: `https://google.com`,
    hrfDemo: `https://jack-burger.vercel.app`
  }
];