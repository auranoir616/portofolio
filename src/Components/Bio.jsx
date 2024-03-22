import Button from "./Button"
import ModalService from "./Modal"
const Bio =(props)=>{
    const {m} = props
    const handleEmail = ()=>{
        window.location.href = "mailto:fitria.dharmawan13@gmail.com?subject=You are Hired!!!&body=";
    }
    return(
        <div className={`${m} flex flex-col justify-center items-center p-10` } >
            <p className="text-white text-5xl font-medium mb-2" >My Bio</p>
            <hr className="w-full mb-2 h-2" style={{color:'white',borderWidth: '3px' }}/>
            <p className="text-white font-medium text-left text-md max-md:backdrop-opacity-10  max-md:backdrop-invert  max-md:bg-black/60" >
            “I am a professional with expertise in Web Development. My great interest in programming has driven me to pursue a career in this field.
             I consistently learn through bootcamps and engage in the development of several personal projects to hone my skills. My approach to programming
              is characterized by logical and structured thinking, breaking down problems into small systematic steps for effective and consistent work results.”
            </p>
            <br />
            <hr className="w-full mb-2 h-2" style={{color:'white',borderWidth: '3px' }}/>

            <div className="text-white font-medium text-left text-md">
                <p>Skills:</p>
                <br />
                    <button disabled className="bg-slate-700 h-10 w-fit p-2 rounded-md mx-2 my-1">HTML & Css</button>
                    <button disabled className="bg-slate-700 h-10 w-fit p-2 rounded-md mx-2 my-1">Javascript</button>
                    <button disabled className="bg-slate-700 h-10 w-fit p-2 rounded-md mx-2 my-1">PHP</button>
                    <button disabled className="bg-slate-700 h-10 w-fit p-2 rounded-md mx-2 my-1">Mysql</button>
                    <button disabled className="bg-slate-700 h-10 w-fit p-2 rounded-md mx-2 my-1">Laravel</button>
                    <button disabled className="bg-slate-700 h-10 w-fit p-2 rounded-md mx-2 my-1">React JS</button>
                    <button disabled className="bg-slate-700 h-10 w-fit p-2 rounded-md mx-2 my-1">Node JS</button>
                    <button disabled className="bg-slate-700 h-10 w-fit p-2 rounded-md mx-2 my-1">Ms. Office</button>
                    <button disabled className="bg-slate-700 h-10 w-fit p-2 rounded-md mx-2 my-1">Python</button>
                    <button disabled className="bg-slate-700 h-10 w-fit p-2 rounded-md mx-2 my-1">Git & GitHub</button>
                
            </div>
            <div className="mt-5 flex 2xl:flex-row max-lg:flex-col justify-start items-center  w-fit ">
        <Button link='#' onClick={handleEmail}>
            Hire Me
        </Button>
        <ModalService >My Services</ModalService>
            <Button link='https://drive.google.com/file/d/11IePEYlKBjV1hI2gIojCMOlx61lhMp4J/view?usp=drive_link'>
            Download CV 
            </Button>
            <Button link='https://wa.me/6289612571617?text=Halo%20febri...'>
            Chat Me 
            </Button>         
            </div>
        </div>
    )
}
export default Bio