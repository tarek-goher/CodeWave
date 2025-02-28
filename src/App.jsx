import { Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Nav from "./Components/Home/nav/Nav";
import Hero from "./Components/Home/Hero/Hero";
import Main from "./Components/Home/main/Main";
import FeaturesSection from "./Components/Home/slider/Slider";
import ShowT from "./Components/Home/Showtemplates/ShowT";
import ProjectGallery from "./Components/Home/Imge-projects/Igme";
import TeamSection from "./Components/Home/team-work/Team";
import ServicesSection from "./Components/Home/slider/Card";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // حساب مقياس التصغير والتقوس بناءً على موضع التمرير
  const calculateScale = () => {
    if (!heroRef.current) return 1;
    
    const heroHeight = heroRef.current.offsetHeight;
    // التصغير التدريجي عند التمرير لأسفل
    const scale = Math.max(0.85, 1 - scrollPosition / (heroHeight * 2));
    return scale;
  };

  // حساب نصف قطر التقوس بناءً على موضع التمرير
  const calculateBorderRadius = () => {
    // زيادة التقوس مع التمرير لأسفل
    return Math.min(40, scrollPosition / 5);
  };

  return (
    <div className="app">
      <Nav />
      <div
        ref={heroRef}
        style={{
          transform: `scale(${calculateScale()})`,
          borderRadius: `${calculateBorderRadius()}px`,
          transition: "transform 0.5s ease-out, border-radius 0.2s ease-out",
          overflow: "hidden",
          transformOrigin: "center center",
        }}
      >
        <Hero />
      </div>

        {/* <Main /> */}
        {/* <FeaturesSection /> */}
        <ServicesSection/>
<ShowT/>
<ProjectGallery/>
<TeamSection/>
    </div>
  );
}

export default App;