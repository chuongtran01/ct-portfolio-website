import About from 'components/about/About'
import Contact from 'components/contact/Contact'
import Experience from 'components/experience/Experience'
import Footer from 'components/footer/Footer'
import Header from 'components/header/Header'
import Nav from 'components/nav/Nav'
import Portfolio from 'components/portfolio/Portfolio'
import React from 'react'

function App() {
  return (
    <div>
      <Header/>
      <Portfolio/>
      <Experience/>
      <About/>
      <Nav/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App