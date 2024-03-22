import { useState } from 'react';
import Button from './Button';
const CardBig =({link, image, desc})=>{
  const [zoom, setZoom] = useState(false)
  const handleMouseEnter=()=>{
    setZoom(true)
  }
  const handleMouseLeave =()=>{
    setZoom(false)
  }
    return(
        <div className="w-1/4 max-xl:w-1/2 max-md:w-full flex-grow h-3/5 bg-gray-900 rounded-md 2xl:p-2 2xl:m-2 max-xl:p-0 max-xl:m-0 flex flex-col items-center justify-between border-2 border-black">
            <div className='w-full h-1/2 bg-slate-200'>
          <div className={`w-full h-full ${zoom ? 'scale-125 ' : ''} transition duration-500 ease z-30`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={image} className='w-full h-48 max-md:h-full rounded-md' />
          </div >
            </div>

        <div className='border-t-2 max-2xl:h-40 h-full overflow-auto p-2'>
            <p className='text-white text-center text-sm'>
            {desc} 
            </p>
        </div>
        <div className='w-full p-2'>
        <Button w='w-full' m='mx-0' link={link}>Visit</Button>
        </div>
        </div>
    )
}
export default CardBig