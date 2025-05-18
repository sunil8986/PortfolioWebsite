import React from 'react'
import { home } from '../data/dummydata'
import Typewriter from "typewriter-effect"
import About from './About';
import Services from './Services';
import Blog from './Blog';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';

const Home = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContent">
            <h3 className="fontSize" data-aos="fade-right">
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
                />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            <button className="button" data-aos="fade-up-right">
              Download CV
            </button>
          </div>
        ))}
      </section>
      <About/>
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog/>
      <Contact />
    </>
  );
}

export default Home