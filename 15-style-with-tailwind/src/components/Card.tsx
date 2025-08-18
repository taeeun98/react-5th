import tw from "@/utils/tw";
import { cva, type VariantProps } from "class-variance-authority"
import Button from "./Button";
// import color from 'tailwindcss/colors' 


type CardProps = React.HTMLAttributes<HTMLDivElement> & 
VariantProps<typeof cardHero> & {
  title: string;
  rate: string;       // $120/he
  company: string;    // 회사/텍스트
  logoSrc: string;    // 로고 이미지 경로
  logoAlt?: string;   // 로고 이미지 설명 
}

const cardHero = cva(
  'relative min-h-[180px] rounded-xl p-6 flex flex-col justify-between',
  {
    variants:{
      type: {
        primary: 'bg-[#FDF4E5]',
        secondary: 'bg-[#F9F7FE]',
        tertiary: 'bg-[#F8FCEE]',
      }
    },
    defaultVariants:{ type:'primary' }
  }
)



function Card({type, title, company,  logoSrc, logoAlt = company, rate, className, ...rest}:CardProps) {



  // logoSrc 조건처리
  // 조건에 부합되는 내용이 없을 경우 /vite.svg 출력 (기본 이미지)

  let iconSrc = ''
  
  switch (logoSrc) {
    case 'facebook': iconSrc = '/facebook.svg' ;break;
    case 'google': iconSrc = '/google.svg' ;break;
    case 'airbnb': iconSrc = '/airbnb.svg' ;break;
    default : iconSrc = '/vite.svg'
  }





  return (
    <div className={tw('rounded-2xl border border-slate-200 bg-white shadow-sm p-4 m-4',className)} {...rest}>

      <div className={cardHero({type})}>
        {/* header */}
        <div className="flex justify-between">
          <span>{rate}</span>

          <button type="button">
            <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M7 17.95L12 15.8L17 17.95V5H7V17.95ZM5 21V5C5 4.45 5.196 3.979 5.588 3.587C5.97933 3.19567 6.45 3 7 3H17C17.55 3 18.021 3.19567 18.413 3.587C18.8043 3.979 19 4.45 19 5V21L12 18L5 21Z" fill="black"/>
          </svg>
          </button>
        </div>

        {/* title */}
        <h3 className="mt-6 text-3xl font-semibold leading-tight text-slate-900">{title}</h3>


        {/* dot */}
        <div className="mt-6 flex items-center gap-1 self-center">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
        </div>

        
        <button type="button" className="absolute right-4 top-2/4">
          <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="black"/>
          </svg>
        </button>
      </div>

      <footer className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="size-10 rounded-full" src={iconSrc} alt={logoAlt} />
          <p className="text-lg font-semibold text-slate-900">{company}</p>
        </div>

        <Button className='bg-red-600'>View</Button>
      </footer>

    </div>
  )
}
export default Card