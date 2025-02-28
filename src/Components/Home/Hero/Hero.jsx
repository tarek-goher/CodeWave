import React from 'react'
import './hero.css'
import { Container } from "@mui/material";
import Lottie from "lottie-react"; 
import { motion } from 'framer-motion';

import programing from '../../../animation/Animation - 1740606391704.json';
import { div } from 'framer-motion/client';

export default function Hero() {
  return (
<div  style={{background:"#10131D"}}>
<div className='hero' >

<div className="text  " >
<motion.h2
    initial={{ x: '-100vw', opacity: 0 }}  // يبدأ العنصر من اليسار
    animate={{ x: 0, opacity: 1 }}         // ينتقل إلى مكانه النهائي مع إظهار العنصر
    transition={{ duration: 1 }}            // مدة الحركة
  >
    <span className='title'>Welcome TO <span>CodeWave</span></span>
  </motion.h2>

  <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 9 }}
    >We are a passionate team of developers and designers dedicated to creating innovative, user-friendly applications that empower businesses to thrive in the digital world.</motion.p>

  < motion.button
   initial={{ y: '100vw', opacity: 0 }}  // يبدأ العنصر من اليسار
   animate={{ y: 0, opacity: 1 }}         // ينتقل إلى مكانه النهائي مع إظهار العنصر
   transition={{ duration: 0.5 }}      
  
  > get start</motion.button>
</div>



  <motion.div
  initial={{ scale: 1.5 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1 }}
  className="animation   ">

  <Lottie  className=' ANIMATION 'height={400} width={400} animationData={programing} />;

  </motion.div>




</div>
</div>
  )
}
