import { socialMedia } from '@/data'
import Link from 'next/link'

export default function SocialMedia() {
  return (
    <div className="grid justify-center">
      
      <div className='sm:flex grid pt-3'>
        {socialMedia.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="px-3 py-2 mx-2 sm:my-0 my-2 rounded-full text-background border-2 text-colorButton border-colorButton hover:bg-colorButton hover:text-white transition-all flex justify-center"
          >
            <span className='flex items-center hover:text-white'>{item.icon}</span>
            <span className='flex items-center text-lg pl-2 font-semibold'>{item.social}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
