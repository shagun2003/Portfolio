import React from 'react'
import './About.css' 
import aboutImage from "../../ima/aboutImage.png";
import cursorIcon from "../../ima/cursorIcon.png";
import serverIcon from "../../ima/serverIcon.png";
import uiIcon from "../../ima/uiIcon.png";

export const About = () => {
  return (
    
   <section className='container'>
    <h2 className='title'>About</h2>
    <div className='content'>
      <img src={aboutImage} alt='Me sitting in front of laptop' className='aboutim'/>
      <ul className='about-items'>
        <li className='about-item'>
       <img src={cursorIcon} alt='Cursor' />
       <div  className='about-item-text'>
        <h3>FrontEnd Developer</h3>
        <p>I'm a frontend developer with experience in building responsive
                and optimized sites</p>
       </div>
        </li>
        <li  className='about-item'>
       <img src={serverIcon} alt='Server'/>
       <div className='about-item-text'>
        <h3>Problem Solving Skills</h3>
        <p> I have solved many questions on platforms like leetcode and gfg</p>
       </div>
        </li>
        <li  className='about-item'>
       <img src={uiIcon} alt='ui'/>
       <div  className='about-item-text'>
        <h3>Backend Developer</h3>
        <p>  I have experience developing fast and optimised back-end systems
                and APIs</p>
       </div>
        </li>

      </ul>
    </div>
   </section>
  )
}
