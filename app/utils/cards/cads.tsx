import { Button, ScrollRevealEffect, ScrollRevealRightEffect } from '@/app/utils';
import { Image } from "@nextui-org/react";

interface ButtonNavProps {
  title?: string;
  description?: string;
  hrfCode?: string;
  hrfDemo?: string;
  tag?: { name: string; icon: React.ReactNode }[];
}

export default function Cards({
  title = '',
  description = '',
  hrfCode = '',
  hrfDemo = '',
  tag = []
}: ButtonNavProps) {

  return (
    <>
      <ScrollRevealEffect>
        <div className="bg-section rounded-3xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center">
            <ScrollRevealRightEffect>
              <p className="text-2xl font-semibold">{title}</p>
            </ScrollRevealRightEffect>
          </div>
          <div>
            <ScrollRevealEffect>
              <p className="mb-4 text-xl">Descripción:</p>
            </ScrollRevealEffect>
            <ScrollRevealEffect>
              <p className="mb-4 text-muted-foreground">{description}</p>
            </ScrollRevealEffect>
            <ScrollRevealEffect>
              <p className="mb-4 text-xl">Tecnologías usadas:</p>
            </ScrollRevealEffect>
            <ScrollRevealRightEffect>
              <div className="flex flex-wrap gap-2">
                {tag.map((tech, index) => (
                  <div key={index} className="flex items-center gap-1 p-2 px-4 py-1 text-base font-medium border-2 text-colorButton border-colorButton hover:bg-colorButton hover:text-white cursor-default transition-all rounded-full shadow">
                    <span className="icon text-2xl flex justify-center">{tech.icon}</span> {/* Renderiza el ícono */}
                    <span className="text-sm font-medium">{tech.name}</span> {/* Renderiza el nombre */}
                  </div>
                ))}
              </div>
            </ScrollRevealRightEffect>
            <div className="pt-5">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block rounded-xl"
                src="https://dummyimage.com/420x260"
              />
            </div>
            <div className="flex justify-around pt-5">
              <Button text="Ver Código" hrf={hrfCode} />
              <Button text="Ver Proyecto" hrf={hrfDemo} />
            </div>
          </div>
        </div>
      </ScrollRevealEffect>
    </>
  );
}
