import { ScrollRevealEffect } from '@/app/utils'

interface LogoProps {
  text?: string;
  number?: number;
  tags: string | string[]
}

export function Skills({ tags}: LogoProps) {


  return (
    <ScrollRevealEffect>
      <div className='group relative inline-flex items-center overflow-hidden px-2 py-1 text-base font-medium bg-colorButton hover:bg-colorButton/70 rounded-full transition-al cursor-default'>
        <span className="text-lg py-2 px-4">{tags}</span>
      </div>
    </ScrollRevealEffect>
  )
}

interface Skil {
  text?: string;
  number?: number;
}

export function Skil({ text = '', number = 0}: Skil) {

  return (
    <ScrollRevealEffect>
      <div className='group relative inline-flex items-center overflow-hidden px-2 py-1 text-base font-medium bg-colorButton hover:bg-colorButton/70 rounded-full transition-al cursor-default'>
        <span className="text-lg py-2 px-4" key={number}>{text}</span>
      </div>
    </ScrollRevealEffect>
  )
}