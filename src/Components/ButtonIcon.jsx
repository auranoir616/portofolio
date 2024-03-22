import { useState } from "react"
import { Link } from "react-router-dom"

const ButtonIcon =(props)=>{
    const {children, link, onClick, w='w-fit', m='mx-2', name} = props
    const [hover, setHover] = useState(false)
    const handleMouseEnter = (e)=>{
        setHover(true);
    }
    const handleMouseLeave = (e)=>{
        setHover(false);

    }

    return(
        <>
        <Link to={link} target="_blank" className="flex flex-row items-center justify-start">
        <button className={`h-15 ${w} rounded-md border-2 bg-white ${m} mb-2 p-2 font-bold flex flex-row justify-center items-center font-sans`}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >  
        {children}
        </button>
        <span className={`text-white font-semibold h-15 mb-2 text-lg ${hover ? 'visible' : 'invisible'}`}>{name}</span>
        </Link>
        </>
    )
}
export default ButtonIcon