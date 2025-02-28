import React from "react";
import "./nav.css";
import { motion } from "framer-motion";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { div } from "framer-motion/client";
export default function Nav() {
  return (
    <div style={{background:"#10131D"}}>
      <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:1 }}
    >
      <nav className="flex    navbar">
        <h1>CodeWave</h1>

        <ul className="flex  ul-nav">
          <li>
            <a href="" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#service">services</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">pages</a>
          </li>
          <button>get start</button>
        </ul>
      </nav>

      {/* start navbar phone  */}

      <nav className="nav-phone ">
        <h1>CodeWave</h1>

        <MenuOutlinedIcon className="icon" />
        <ul className="ul-phone">
          <li>
            <a href="" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#service">services</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">pages</a>
          </li>
          <button>get start</button>
        </ul>
      </nav>
    </motion.header>
    </div>
  );
}
