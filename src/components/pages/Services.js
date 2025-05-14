import React from 'react';
import { services } from '../data/dummydata';

const Services = () => {
  return (
    <section id="serv">
      <div className="services">
        <h2>Services</h2>
        <div className="serv-row">
          {services.map((val, index) => (
            <div className="ser_box" key={index}>
              <div className="left servicons" data-aos="fade-down-right">
                {val.icon}
              </div>
              <div className="right" data-aos="fade-down-left">
                <h2>{val.title}</h2>
                <p>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
