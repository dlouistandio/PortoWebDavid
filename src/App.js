import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portofolio from './components/portofolio/Portofolio';
import Home from './components/home/Home';
import About from './components/about/About';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';

const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portofolio />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
    </>
  )
  }

export default App;
