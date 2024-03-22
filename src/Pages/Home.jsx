import { useEffect, useState } from 'react'
import bgHome from '../assets/bgHome.jpg'
const Home =()=>{
    const text = "hello... I'm Febri A FullStack Developer"
    const [index, setIndex] = useState(0)
    const [blink, setBlink] = useState(true)
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setIndex((prevIndex)=>prevIndex+1)
        },100);
        return () => clearTimeout(timeOut)
    },[index])
    useEffect(()=>{
 const timer = setInterval(() => {
      setBlink(prevBlink => !prevBlink); // toggle the state
    }, 500); // adjust the speed of blinking here
    return () => clearInterval(timer); // clean up on component unmount
    },[])
    return( 
<div className="h-screen  w-full flex 2xl:flex-row max-2xl:flex-col justify-center items-center" id='Home' style={{backgroundImage:`url(${bgHome})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'left'}}>
          <div className='w-1/2 max-2xl:h-1/2'>

          </div>
          <div className='w-1/2 max-2xl:h-1/2 max-2xl:w-full max-2xl:bg-black'>
        <p className='text-white text-6xl font-medium mb-24' >
        {text.slice(0, index)}
      <span>{blink ? "|" : ''}</span>
        </p>
        
          </div>
        </div>
    )
}
export default Home;