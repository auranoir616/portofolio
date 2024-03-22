import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  const [navbarColor, setNavbarColor] = useState(true)
  const [style,setStyle] = useState({
    color: 'black',
    // fontFamily:'Shippori Mincho'
  })
  
  useEffect(() => {
    const handleScroll = () => {
      setNavbarColor(window.pageYOffset === 0); //true
    };
    window.addEventListener('scroll', handleScroll);
    // Membersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
},[])
useEffect(() => {
  if (navbarColor) {
    setStyle(prevStyle => ({
      ...prevStyle,
      color: 'white'
    }));
  } else {
    setStyle(prevStyle => ({
      ...prevStyle,
      color: 'black'
    }));
  }
}, [navbarColor]);

const ColorMouseEnter=(e)=>{
  e.target.style.transform = 'scale(1.2)'
}
const ColorMouseLeave=(e)=>{
  e.target.style.transform = 'scale(1)'
}

  return (
    <Navbar collapseOnSelect expand="lg" className={`${navbarColor ? '' : 'bg-white'} max-md:bg-gray-600 transition duration-1000 ease shadow-lg w-screen fixed max-lg:w-full flex items-center justify-center flex-row z-40`}> 
         <Container>
        {/* <Navbar.Brand href="#AboutMe">febri</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="lg:flex lg:flex-row lg:justify-center lg:items-center w-full">
          <Nav.Link href='#Home' style={style} onMouseEnter={ColorMouseEnter} onMouseLeave={ColorMouseLeave} className=" mx-2 font-bold text-lg ">Home</Nav.Link>
          <Nav.Link href='#AboutMe' style={style} onMouseEnter={ColorMouseEnter} onMouseLeave={ColorMouseLeave} className=" mx-2 font-bold text-lg ">About Me</Nav.Link>
          <Nav.Link href='#Experience' style={style} onMouseEnter={ColorMouseEnter} onMouseLeave={ColorMouseLeave} className=" mx-2 font-bold text-lg">Resume</Nav.Link>
          <Nav.Link href='#Project' style={style} onMouseEnter={ColorMouseEnter} onMouseLeave={ColorMouseLeave} className=" mx-2 font-bold text-lg ">Project</Nav.Link>
          <Nav.Link href='#Contact' style={style} onMouseEnter={ColorMouseEnter} onMouseLeave={ColorMouseLeave} className=" mx-2 font-bold text-lg ">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;