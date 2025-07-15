import { forwardRef, type RefObject } from "react";

interface Props {
    placeholder: string;
    // ref: RefObject<HTMLInputElement>;
    ref: RefObject<HTMLInputElement | null> 
}


const Child = ({placeholder, ref}:Props) => {

  return (
    <input ref={ref} type="text" placeholder={placeholder}/>
  )
}


export default Child




// const Child = forwardRef<HTMLInputElement, Props>(({placeholder}, ref) => {

//     console.log(ref);
    
//   return (
//     <input ref={ref} type="text" placeholder={placeholder}/>
//   )
// })
