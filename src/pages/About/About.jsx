import React from 'react'
import "./About.css"
import danisma1 from "../../assets/danisma.png"
import danisma2 from "../../assets/danisma2.jpg"
import danisma3 from "../../assets/danisma3.jpg"

const About = () => {
  return (
    <div className='about-container'>
      <div className="about-area">
        <div className="left-area">
          <div className="image-area">
            <div className="image">
              <img src={danisma1} alt="" />
            </div>
            <div className="image">
              <img src={danisma2} alt="" />
            </div>
            <div className="image">
              <img src={danisma3} alt="" />
            </div>
          </div>
        </div>
        <div className="right-area">
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, possimus?</h3>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt at reprehenderit magni totam quisquam ullam perspiciatis reiciendis libero cupiditate quasi?</h3>
        </div>
      </div>
    </div>
  )
}

export default About