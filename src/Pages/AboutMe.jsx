import React from 'react';
import foto1 from '../assets/pasfoto-new.png'
import Bio from '../Components/Bio';
import bgCode from '../assets/bgCode.jpg'
const AboutMe = () => {
  return (
<div className="2xl:h-screen bg-black max-2xl:h-max" id='AboutMe'
 style={{backgroundImage:`url(${bgCode})`,backgroundSize:'cover', backgroundSize: 'contain', backgroundRepeat:'no-repeat',backgroundPosition:'right'}}
 >
        <div className='w-full h-screen max-2xl:h-max flex lg:flex-row max-md:flex-col justify-center items-between lg:p-24 md:p-2 mt-10'>
        <div className='w-1/4  max-md:w-full h-full max-md:h-fit rounded-md max-md:flex max-md:flex-col max-md:justify-center max-md:items-center flex flex-col justify-start items-center ' >
        <img src={foto1} className='h-3/5 w-3/4 rounded-lg'/>
        <p className="text-white text-2xl font-bold mb-2">Febrianto Fitra Dharmawan</p>
        </div>
        <div className='w-1/2 max-2xl:w-full h-full max-2xl:h-max'>
          <Bio/>
        </div>
        </div>
      </div>
  );
}

export default AboutMe;
