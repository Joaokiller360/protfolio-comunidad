import { Hero, About, Skill, Projects } from '@/app/components/index'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="container grid justify-center items-center mx-auto px-5">
        <About />
        <Projects />
        <Skill />
      </main>
    </>
  );
}
