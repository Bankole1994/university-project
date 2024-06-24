import Hero from "./component/Hero/Hero"
import { About } from "./component/about/About"
import {Campus} from "./component/campus/Campus"
import {Contact} from "./component/contact/Contact"
import { Footer } from "./component/footer/Footer"
import { Navbar } from "./component/navbar/Navbar"
import { Program } from "./component/program/Program"
import {Testimonial} from "./component/testimonial/Testimonial"
import { Title } from "./component/title/Title"


function App() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <div className="general-container">
      <Title subTitle='Our Programe' title='What We Offer'/>
      <Program/>
      <About/>
      <Title subTitle='Gallery' title='Campus Picture'/>
      <Campus/>

      <Title subTitle='Testimonials' title='What a student say'/>
      <Testimonial/>

      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>
     </div>
    <Footer/>
    </>
  )
}

export default App
