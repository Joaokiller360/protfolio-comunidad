import { Button, Skills, ScrollRevealEffect, ScrollRevealRightEffect } from '@/app/utils'

interface ButtonNavProps {
  title?: string;
  description?: string;
  hrfCode?: string;
  hrfDemo?: string
  tags: string | string[]
}

export default function Cards({ title = '', description = '', hrfCode = '', hrfDemo = '', tags }: ButtonNavProps) {

  const tagList = Array.isArray(tags) ? tags : [tags];

  return (
    <>
      <ScrollRevealEffect>
        <div className="bg-section rounded-3xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className='flex justify-center'>
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
              <p className="mb-4 text-xl">Tecnologias usadas:</p>
            </ScrollRevealEffect>
            <ScrollRevealRightEffect>
              <div className="flex flex-wrap gap-2">
                {tagList.map((tag, index) => (
                  <Skills key={index} tags={`${tag}`} />
                ))}
              </div>
            </ScrollRevealRightEffect>
            <div className='pt-5'>
              <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-xl" src="https://dummyimage.com/420x260" />
            </div>

            <div className='flex justify-around pt-5'>
              <Button text='Ver Codigo' hrf={hrfCode} />
              <Button text='Ver Projecto' hrf={hrfDemo} />
            </div>
          </div>
        </div>
      </ScrollRevealEffect>
    </>
  )
}
