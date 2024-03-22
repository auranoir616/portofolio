import { useState } from "react"
const ButtonNoLink =(props)=>{
    const {children, onClick, w='w-fit', m='mx-2',type } = props
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
        <button className={`${w} w-fit rounded-md border-2 ${m} mb-2 p-2 font-bold font-sans`}
        onClick={onClick}
        type={type}
        style={{ color: hover ? 'black':'white', backgroundColor: hover ? 'white':'black',fontFamily:'Courier Prime' }}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>  
        {children}
        </button>
        </>
    )

}
export default ButtonNoLink