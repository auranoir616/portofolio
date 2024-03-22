import coding from '../assets/coding.jpg'
import EmailForm from '../Components/FormEmail';
import IconsContact from '../Components/IconsContact';

const Contact = () => {
    return (
      <div className=" h-screen w-full max-lg:h-fit" id='Contact'>
        <div className="w-full h-4/5 " style={{ backgroundImage: `url(${coding})`, backgroundSize: 'contain', backgroundRepeat:'no-repeat'}}>
          <div className='w-full '>
        <p className='text-6xl text-center font-medium text-white'>
          Contact Me
        </p>
          </div>
          <div className='h-4/5 w-full flex 2xl:flex-row max-lg:flex-col max-lg:items-center max-lg:justify-center justify-start items-start'>
          <div className='w-2/5 h-full'>

          </div>
          <div className=' w-3/5 max-lg:w-full max-lg:bg-black max-lg:justify-end max-lg:items-between h-full flex flex-row 2xl:justify-start 2xl:items-start p-2 '>
            <div className='  w-full h-full flex flex-col justify-start items-end '>
          <EmailForm/>
            </div>
            <div className=' w-full h-full flex flex-row justify-start items-start ml-5 '>
          <IconsContact/>
            </div>
          </div>
          </div>
        </div>
        <div className="w-full h-1/5">
          <div className="w-full h-3/5">

          </div>
          <div className="w-full h-2/5 border-t-2 border-gray-50 ">
          <p className='text-white text-center mt-3'>
        Copyright ©2024 All rights reserved | Created using React JS
          </p>
          </div>
        </div>
      </div>
    );
  }
  export default Contact;
  