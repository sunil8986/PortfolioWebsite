import React from 'react'
import { about } from '../data/dummydata'

const About = () => {
  return (
    <section>
      <div className='about flex'>
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <h2>About me</h2>
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button className="buttonfilled">Learn more</button>
                <button className="button">Learn more</button>
              </div>
            </>
          ))}
      </div>
    </section>
  );
}

export default About