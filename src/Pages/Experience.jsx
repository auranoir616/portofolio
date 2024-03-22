import { useEffect, useState } from 'react';
import bgPlane from '../assets/bgPlane.jpg';
import Button from '../Components/Button';
import blk from '../assets/sertifikat_blk.png'
import kom from '../assets/sertifikat_kopetensi.png'
import js from '../assets/sertifikat_niomic_js.png'
import ModalImage from '../Components/ModalImage';
const Experience = () => {
  const [loading, setLoading] = useState(false);

  const display = () => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setLoading(true);
        } else {
          setLoading(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    const targetElement = document.getElementById('Experience');
    return observer.observe(targetElement);
  };

  useEffect(() => {
    display();
  }, []);
  return (
<div className='w-full flex flex-col justify-center items-center max-2xl:h-max flex-wrap 2xl:h-full '>

  <div className='w-full flex flex-col justify-center items-center h-full '>
    <p className='text-5xl text-center font-medium text-white w-full' id='Experience'>
      Resume
    </p>
    <hr className='w-full mt-2 h-2 mb-2' style={{ color: 'white', borderWidth: '3px' }} />
  </div>

  <div className=' max-2xl:h-max 2xl:h-full max-2xl:my-0  flex max-2xl:flex-col 2xl:flex-row justify-between items-center'
   style={{ backgroundImage: `url(${bgPlane})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

    <div className='2xl:h-screen max-2xl:w-full 2xl:w-1/2 max-2xl:h-1/2'>
      <div className='text-5xl underline underline-offset-4 text-white'>
        Certificate
      </div>
      <div className='flex flex-wrap xl:flex-row max-2xl:flex-col justify-center items-center p-2 max-2xl:w-full 2xl:w-fit max-2xl:h-max'>
        <ModalImage image={kom} />
        <ModalImage image={blk} />
        <ModalImage image={js} />
      </div>
    </div>
    <div className='2xl:h-screen max-2xl:w-full 2xl:w-1/2 max-2xl:h-1/2'>
      <div className='text-5xl underline underline-offset-4 text-white'>
      Work Experience
      </div>
    <div className=' w-full h-max p-2 backdrop-opacity-10 backdrop-invert bg-black/60' id='Experience'>
        <ExperienceItem
          company='PT. Trimega Baterindo'
          position='Production Operator'
          duration='July 2016 - September 2018'
          city='Sidoarjo'
          status='Full Time'
          loading={loading}
          />
        <ExperienceItem
          company='PT. Industri Telekomunikasi Indonesia'
          position='IT Support'
          duration='January 2019 - January 2020'
          city='Malang'
          status='Full Time'
          loading={loading}
          />
        <ExperienceItem
          company='Vernon Office'
          position='Warehouse Administrator'
          duration='March 2021 - July 2023'
          city='Malang'
          status='Full Time'
          loading={loading}
          />
                <ExperienceItem
          company='Freelance'
          position='Fullstack Developer'
          duration='July 2023 - Present'
          city='Malang'
          status='Freelance'
          // description='"Currently focusing on learning programming and offering freelance services"'
          loading={loading}
          />
      <p className='text-5xl text-center underline underline-offset-4 text-white m-10  '>
        Education & Course
        </p>


                <ExperienceItem
          company='SMK Muhammadiyah 1 Kepanjen'
          position='Computer and Network Engineering'
          duration='July 2013 - july 2016'
          city='Malang'
          loading={loading}
          />
                <ExperienceItem
          company='BLK Wonojati Singosari'
          position='Practical Office Advance'
          duration='December 2020 - January 2021'
          city='Malang'
          loading={loading}
          />
                          <ExperienceItem
          company='Bootcamp Niomic'
          position='Programming'
          duration='January 2023 - Present'
          city='Malang'
          loading={loading}
          />


      </div>
      </div>
    </div>
      <div className={` text-white w-full  flex flex-row justify-center items-center `}>
        <Button link='https://www.linkedin.com/in/febrianto-fitria-dharmawan-884080209'>
           Connect with me in LinkedIn
        </Button>
      </div>
</div>
  );
};

const ExperienceItem = ({ city, company, position, duration, status, loading }) => {
  return (
<div className={`h-max flex flex-row justify-start items-center m-2 max-w-full w-11/12 border-b-2`}>
  <div style={{ color: 'white' }} className='flex flex-row justify-between items-start w-full py-1'>
    <div className='w-3/5'>
      <p className='text-2xl font-semibold mb-2'>{position}</p>
      <div className='flex xl:flex-row max-xl:flex-col justify-start h-max items-start font-medium text-md'>
        <div className='flex flex-row justify-start items-start'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
          <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
          <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
        </svg>
        &nbsp;
        {company} &nbsp;
        </div>
        <div className='flex flex-row justify-start items-start'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
        </svg>
        {city}
        </div>
      </div>
    </div>
    <div className='w-2/5 flex flex-col justify-end items-end'>
      <div className='rounded-lg bg-slate-500 w-fit p-1'>{status}</div>
      <p className=''>{duration}</p>
    </div>
  </div>
</div>
  
  );
};

export default Experience;
