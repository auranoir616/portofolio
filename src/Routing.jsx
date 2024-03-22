import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './Pages/App';
const Routing =()=>{
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App/>} /> 
            </Routes>
        </BrowserRouter>
    )
}
export default Routing;