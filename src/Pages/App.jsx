import AboutMe from "./AboutMe"
import Experience from "./Experience"
import Contact from "./Contact"
import Project from "./Project"
import Home from "./Home"
import NavbarComponent from "../Components/NavbarComponent"
const App =()=>{
    return(
        <div className="bg-black" style={{fontFamily:'Courier Prime'}}>
            <NavbarComponent />
            <Home/>
            <AboutMe/>
            <Experience/>
            <Project/>
            <Contact/>
        </div>
    )
  }
  export default App