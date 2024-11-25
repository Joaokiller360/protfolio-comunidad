import { Skil, ScrollRevealEffect, ScrollRevealRightEffect } from '@/app/utils'

export default function Skill() {
  const skill = [
    "HTML", "CSS", "TypeScript", "React", "Next.js",
    "MongoDB", "PostgreSQL",
    "Tailwind CSS", "Git"
  ]

  return (
    <section className="py-16 fade-in">
      <ScrollRevealRightEffect>
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Habilidades</h2>
      </ScrollRevealRightEffect>
      <ScrollRevealRightEffect>
        <div className="flex flex-wrap justify-center gap-3">
          {skill.map((skill, index) => (
            <Skil number={index} text={`${skill}`} />
          ))}
        </div>
      </ScrollRevealRightEffect>
    </section>
  )
}