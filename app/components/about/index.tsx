import { ScrollRevealEffect, ScrollRevealRightEffect } from '@/app/utils'
import { Image } from "@nextui-org/react";

export default function About() {
  return (
    <section className="flex justify-center items-center w-full py-16" id="about">
      <div className="bg-section py-16 rounded-3xl w-full text-foreground">
        <ScrollRevealEffect>
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre mí</h2>
        </ScrollRevealEffect>
        <ScrollRevealRightEffect>
          <div className='sm:flex grid sm:items-center justify-center sm:px-32'>
            <p className="p-6">
              <span className="text-lg leading-relaxed">
                Soy un desarrollador web apasionado por crear soluciones innovadoras.
                Con experiencia en tecnologías frontend y backend, me encanta enfrentar
                nuevos desafíos y aprender constantemente. Mi objetivo es construir
                aplicaciones web que no solo funcionen perfectamente, sino que también
                ofrezcan una experiencia de usuario excepcional.
              </span>
            </p>
            <div className='flex justify-center h-auto w-full'>
              <Image className='sm:w-80 w-40 h-auto' src="/media/joaoCompu.webp" alt="joaoCompu" />
            </div>
          </div>
        </ScrollRevealRightEffect>
      </div>
    </section>
  );
}