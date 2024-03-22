import wms1 from "../assets/wms_dashboard.png"
import sc from "../assets/SC_2.png"
import shop from "../assets/FS_shop.png"
import CardBig from "../Components/CardBig";
import crud from "../assets/CRUD_1.png"
import Button from "../Components/Button";
import bgCode2 from '../assets/bgCode2.jpg'

const Project = () => {
  return (
    <div className="flex flex-col justify-center max-2xl:h-max items-center h-screen "
    style={{backgroundImage:`url(${bgCode2})`,backgroundSize:'cover', backgroundSize: 'cover', backgroundRepeat:'no-repeat',backgroundPosition:'center'}}
    id='Project'
    >
    <div className="w-full my-5" >
      <p className="text-white  text-5xl text-left max-md:text-center" >My Project</p>
      <hr className='w-full h-2 ' style={{ color: 'white', borderWidth: '3px' }} />

    </div>
    <div className=" h-3/4 max-2xl:h-max max-xl:flex-wrap flex max-xl:flex-row max-md:flex-col items-start max-xl:items-start max-xl:justify-start justify-center w-3/4 max-lg:w-full" >
      <CardBig image={wms1} link='https://datastock.leleminati.site/' desc='a web application for warehouse management including purchase orders, incoming goods, broken stock and others that uses Laravel and JavaScript as the main system'/>
      <CardBig image={sc} link='https://fishbook.leleminati.site/' desc='A social media web application has the same features as other social media which uses Laravel and JavaScript as the main system (can register using fake data)'/>
      <CardBig image={shop} link='https://shop.leleminati.site/' desc='a fake online shop application that uses the fakestore API completely using React JS as its main library'/>
      <CardBig image={crud} link='https://reactvel.leleminati.site/' desc='website with a CRUD system to store user data created using laravel and React js'/>
      {/* <CardBig image={crud} link='https://reactvel.leleminati.site/' desc='website with a CRUD system to store user data created using laravel and React js'/> */}
    </div>
    <div className="w-full flex flex-row justify-center items-center">
      <Button link="https://github.com/auranoir616">follow me on Github</Button>
    </div>

    </div>
  );
}
export default Project;
