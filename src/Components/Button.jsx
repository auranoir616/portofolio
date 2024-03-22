import { useState } from "react"
import { Link } from "react-router-dom"

const Button =(props)=>{
    const {children, link, onClick, w='w-fit', m='mx-2'} = props
    const [hover, setHover] = useState(false)
    const handleMouseEnter = (e)=>{
        e.target.style.color = 'black';
        e.target.style.backgroundColor = 'white';
        setHover(true);
    }
    const handleMouseLeave = (e)=>{
        e.target.style.color = 'white';
        e.target.style.backgroundColor = 'black';
        setHover(false);

    }

    return(
        <>
        <Link to={link} target="_blank">
        <button className={`h-15 ${w} rounded-md border-2 ${m} mb-2 p-2 font-bold flex flex-row justify-center items-center font-sans`}
        onClick={onClick}
        style={{color: hover ? 'black':'white', backgroundColor: hover ? 'white':'black',fontFamily:'Courier Prime' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >  
        {children}
        </button>
        </Link>
        </>
    )
}
export default Button