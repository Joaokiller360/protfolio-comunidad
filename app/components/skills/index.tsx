import { Skil, ScrollRevealRightEffect } from '@/app/utils';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiWordpress } from 'react-icons/si';

export default function Skill() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Wordpress", icon: <SiWordpress /> },
  ];

  return (
    <section className="py-16 fade-in">
      <ScrollRevealRightEffect>
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Habilidades</h2>
      </ScrollRevealRightEffect>
      <ScrollRevealRightEffect>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Skil
              key={index}
              number={index}
              text={skill.name}
              icon={skill.icon} // Pasa el ícono como prop
            />
          ))}
        </div>
      </ScrollRevealRightEffect>
    </section>
  );
}
