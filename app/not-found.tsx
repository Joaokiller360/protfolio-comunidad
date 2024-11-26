'use client'

import Link from "next/link"

export default function NotFound({ error }: { error: unknown }) {
  return (
    <>
      <section className='text-gray-100 w-full'>
        <div className='relative w-full h-auto overflow-hidden lg:gap-8 xl:gap-0 lg:py-60 pt-60 lg:px-0 px-10 text-center z-10'>
          <p className='mt-4 text-3xl font-bold sm:text-5xl text-customRed'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>Página No Encontrada</h1>
          <p className='mt-6 text-base leading-7'>Lo sentimos, no hemos podido encontrar la página que busca.</p>
          <div className='text-center pt-5'>
            <Link href='/' className='group relative inline-flex items-center overflow-hidden px-8 py-3 mr-3 text-base font-medium text-center bg-customRed hover:bg-white hover:text-black rounded-2xl transition-all animate-delay-100'>
              <span className='absolute -end-full transition-all group-hover:end-4'>
                <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
                </svg>
              </span>
              <span className='transition-all group-hover:me-4'>Volver al Inicio</span>
            </Link>
            <Link href='/#projects' className='group relative inline-flex items-center overflow-hidden px-8 py-3 mr-3 text-base font-medium text-center hover:text-black hover:bg-white rounded-2xl transition-all animate-delay-100'>
              <span className='absolute -end-full transition-all group-hover:end-4'>
                <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
                </svg>
              </span>
              <span className='transition-all group-hover:me-4'>Contactenos</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}