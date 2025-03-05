import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Working from './components/Working'
import About from './components/About'
import Aos from 'aos'
import "aos/dist/aos.css";

const App = () => {

  // useEffect(() => {
  //   Aos.init(
  //     {
  //       offset: 100,
  //       duration: 700,
  //       easing: "ease-in",
  //       delay: 100,
  //     }
  // )
  // })

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Working />
      <Testimonial />
      <Contact />
    </>
  )
}

export default App