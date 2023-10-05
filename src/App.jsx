import React from 'react'
import Home from './components/home/Homepage'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Service'
import Blog from './components/blog/Blogs'
import Testimonials from './components/testimonial/Testimonials'
import Contacts from './components/contact/Contacts'
import Footer from './components/footer/Footer'
import Navv from './components/navv/Navv'

const App = () => {
  return (
    <>
      <Nav/>   {/*top bar navigation*/}
      <Home/>    {/*home page*/}
      <Navv/>   {/*left side bar navigation*/}
      <About/>     {/*about page*/}
      <Services/>   {/*service page*/}
      <Testimonials/>   {/*testimonial page*/}
      <Blog/>    {/*Blog page*/}
      <Contacts/>   {/*contact page*/}
      <Footer/>    {/*footer page*/}
    </>
  )
}

export default App