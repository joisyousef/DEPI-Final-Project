

import Header from './components/Header';
import HeroSection from './components/HeroSection'
import Footer from './components/Footer-main';
import Home from './pages/home/Home';
import Blog from './pages/blogs/Blog'
import Contact from './pages/contactUs/contactUs'
import Service from './pages/services/ServiceSection'

import "./style/all.min.css";
import  "./style/main.css";
import { BrowserRouter,  Route, Routes,useLocation } from "react-router-dom";
import Doctors from './pages/doctors/Doctors';
import Departments from './pages/department/Departments';



function App() {
const location = useLocation()

  return (
    <div className="App">
  <Header/>

  {location.pathname!=="/" &&   <HeroSection setChange={location.pathname}>Our best services</HeroSection>}

  <Routes> 
    <Route path="/" element={  <Home/>}  />
    <Route path='/doctors' element={<Doctors/>} />
    <Route path='/Departments' element={<Departments/>}/>
    <Route path="Services" element={<Service/>} />
   <Route path="Bolg" element={<Blog/>} />
   <Route path="contact-Us" element={<Contact/>} />
   
  
  </Routes>

  {location.pathname!=="/"&&<Footer/>}

    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}


