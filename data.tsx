import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

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
      icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
      link: "#portfolio",
  }
];