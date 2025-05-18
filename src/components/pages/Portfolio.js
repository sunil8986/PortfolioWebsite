import React, { useState } from 'react'
import { portfolio } from '../data/dummydata'
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"

let allCategory = ["All", ...new Set(portfolio.map((item) => item.category))]
console.log(allCategory)

const Portfolio = () => {

  const [selectedCat, setSelectedCat] = useState("All");
   

  let [list,setList] = useState(portfolio);
  let [category,setCategory] = useState(allCategory);
  console.log(setCategory)

  function filterItems(cat) {
    const newItems = portfolio.filter((item) => item.category === cat);
    setList(newItems);

    setSelectedCat(cat); // <-- track selected tab
    
    if (cat === "All") {
      setList(portfolio);
      return;
    }
  }

  return (
    <>
      <article>
        <div className='containerportfolio'>
          <h2>Portfolio</h2>
          <div className='catButton'>
            {category.map((cat) => (
  <button
    key={cat}
    className={`primaryBtn ${selectedCat === cat ? 'active' : ''}`}
    onClick={() => filterItems(cat)}
    data-aos='zoom-out-down'
  >
    {cat}
  </button>
))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
              <div className='box' data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}

export default Portfolio