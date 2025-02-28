import React from 'react';
import './Slider.css';
import { motion } from 'framer-motion';
import img from '../../../assets/back-img.jpeg'
import WebIcon from "@mui/icons-material/Web";
function Slider() {
  return (
    <div className="service" id='service'>
      <motion.h1
      
      initial={{ x: '-100vw', opacity: 0 }}  
      animate={{ x: 0, opacity: 1 }}         
      transition={{ duration: 1 }}     
      
      className='text-service'><span>Or</span> Sirvice</motion.h1>
      <div className="container">
      {/* Website Service */}
      <motion.div 
      
      initial={{ x: '-100vw', opacity: 0 }}  
      animate={{ x: 0, opacity: 1 }}         
      transition={{ duration: 1 }} 
      className="box">
        <div className="content">
          <img src={img} alt="Website" />
          <WebIcon className="wep" />
          <p className='title'> Website</p>
          <div className="description">
            <h3>Website Development</h3>
            <p>We create and develop professional websites that suit your needs.</p>
          </div>
          {/* <button className='btn'>Get start</button> */}
        </div>
      </motion.div>
      
      {/* Mobile Application Service */}
      <motion.div
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}         
            transition={{ duration: 4}} className="box">
        <div className="content">
          <img src={img} alt="Mobile App" />
          <WebIcon className="wep" />
          <p className='title'>Mobile App</p>
          <div className="description">
            <h3>Mobile App Development</h3>
            <p>We help you build high-quality mobile applications for various platforms.</p>
          </div>
          {/* <button className='btn'>Get start</button> */}
        </div>
      </motion.div>
      
      {/* UI/UX Service */}
      < motion.div
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}         
            transition={{ duration: 4}} 
      className="box">
        <div className="content">
          <img src={img} alt="UI/UX" />
          <WebIcon className="wep" />
          <p className='title'>UI/UX</p>
          <div className="description">
            <h3>UI/UX Design</h3>
            <p>We provide attractive and efficient designs to enhance user experience.</p>
          </div>
          {/* <button className='btn'>Get start</button> */}
        </div>
      </motion.div>
      
      {/* Desktop Application Service */}
      <motion.div
      
      initial={{ x: '100vw', opacity: 0 }}  
      animate={{ x: 0, opacity: 1 }}        
      transition={{ duration: 1 }} className="box">
        <div className="content">
          <img src={img} alt="Desktop App" />
           <WebIcon className="wep" />
        
          <p className='title'>Desktop App</p>
          <div className="description">
            <h3>Desktop Application Development</h3>
            <p>We develop customized desktop applications for Windows and Mac.</p>
    
          </div>
          {/* <button className='btn'>Get start</button> */}
        </div>
      </motion.div>
    </div>
    </div>
  );
}

export default Slider;
