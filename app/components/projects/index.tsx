import { Cards, Skills, Button } from '@/app/utils'

export default function Projects() {

  const projects = [
    {
      title: "JB OCESE",
      description: "Una web moderna creada para una empresa.",
      tags: ["React", "Node.js"],
      hrfCode: `https://google.com`,
      hrfDemo: `https://jbocese.com`
    },
    {
      title: "Jack Burger",
      description: "Plataforma de menú para un pequeño local.",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      hrfCode: `https://jbocese.com`,
      hrfDemo: `https://google.com`
    }
  ]

  return (
    <>
      <section className="py-16" id='projects'>
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Cards key={`${index}`} title={`${project.title}`} description={`${project.description}`} tags={project.tags} hrfCode={project.hrfCode} hrfDemo={project.hrfDemo} />
          ))}
        </div>
      </section>
    </>
  )
}
