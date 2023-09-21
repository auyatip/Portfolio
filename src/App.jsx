import About from "./Components/About"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Nav from "./Components/Nav"
import Service from "./Components/Service"
import Projects from './Components/Projects'
import IndexScroll from '../src/Components/AutoScroll/indexScroll'
import {GoArrowUp} from 'react-icons/go'
import { useEffect, useState } from "react"
import BG from './assets/bg.jpg'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if (window.scrollY > 100){
        setIsVisible(true)
      }else {
        setIsVisible(false)
      }
    })
  },[]);

  const goTop = () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  
  return (
    <div className="bg-[url('./assets/bg-content.jpg')] relative">
      <div className="bg-[url('./assets/bg-desktop.jpg')]">
          <Nav/>
          <Banner/>
      </div>
      <IndexScroll/>
      <div className="bg-[url('./assets/bg-content.jpg')] bg-cover">
      <About/>
      <Projects/>
      <Service/>
      </div>
      <Footer/>
      
      <div className="scale-70 bottom-3 right-3 lg:bottom-10 lg:right-10 text-[#8DDFCB] text-center p-2 rounded-full hover:shadow-[#25ffc9] 
      shadow-sm font-semibold fixed hover:text-[#25ffc9] hover:scale-110 duration-300 cursor-pointer" 
      style={{display: isVisible ? 'block':'none'}} 
      onClick={goTop}>
        <div className="flex flex-col items-center">
          <GoArrowUp size={40}/>
          <p className="uppercase p-2 text-xs">back to top</p>
        </div>
      </div>
    </div>
  )
}

export default App
