import React from 'react'
import { blog } from '../data/dummydata'


const Blog = () => {
  return (
    <section id="blog">
      <div className="blogbox">
        <h2>Blog</h2>
        <div className="blog-row">
          {blog.map((val, index) => (
            <div className="ser_box" key={index}>
              <div className="left servicons" data-aos="fade-down-right">
                <img src={val.cover} alt="" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <h2>{val.title}</h2>
                <p>By {val.author} {val.date}</p>
                <p>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog
