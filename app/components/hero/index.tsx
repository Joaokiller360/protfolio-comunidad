import { ScrollRevealEffect, Button, ScrollRevealRightEffect } from "@/app/utils";
import { Image } from "@nextui-org/react";

export default function Hero() {
  return (
    <>
      <section className="w-full h-dvh flex items-center justify-center text-center bg-gradient-to-br from-secondary to-background relative">
        <div className="fade-in max-w-4xl">
          <ScrollRevealEffect>
            <h1 className="text-5xl font-bold mb-4 gradient-text">
              Hola, soy Joao Barres 👋
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Desarrollador Web Full Stack
            </p>
            <Button hrf="#projects" text="Ver mis proyectos" />
          </ScrollRevealEffect>
        </div>
      </section>
      <ScrollRevealRightEffect>
          <div className="absolute bottom-0 left-0 sm:w-80 w-40 h-auto">
            <Image src="/media/joaoDev.webp" alt="JoaoDev" />
          </div>
        </ScrollRevealRightEffect>
    </>
  );
}
