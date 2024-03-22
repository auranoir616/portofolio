import { Link } from 'react-router-dom'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Card = (props)=>{

    const {link, children,image} = props

    return(
        <>
        <Link to={link} target='_blank'>
        <div className="w-full h-16 border-2 m-1 rounded-lg flex flex-row justify-start items-center p-1">
            <div>
                <img src={image} className='w-14 h-14 rounded-lg mr-2'/>
            </div>
            <div className='text-lg'>
           {children}
            </div>
        </div>
        </Link>
        </>
    )
}
export default Card