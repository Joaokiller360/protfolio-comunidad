import { userName } from '@/data'

export default function Footer() {
  return (
    <div className="flex justify-center py-10">
      {userName.map((user, index) => (
        <div key={index}>
          <p className='focus:outline-none mt-6 text-xs lg:text-sm leading-none mx-5 text-center h-5'>Todos los derechos reservados por
            <span> ©<span className='font-medium hover:text-customRed hover:underline cursor-pointer'>{user.userName}</span></span>
          </p>
        </div>
      ))}
    </div>
  )
}
