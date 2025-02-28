import React from "react";
import ReactApexChart from "react-apexcharts";
import "./show.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import imge from "../../../assets/img.png";
import { Star, StarBorder } from '@mui/icons-material';

export default function ShowT() {
  const [state, setState] = React.useState({
    series: [67], // النسبة
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%",
            image: imge, // رابط صورة المنبه
            imageWidth: 64, // حجم الأيقونة
            imageHeight: 64, // حجم الأيقونة
            imageClipped: false,
          },
          dataLabels: {
            name: {
              show: false,
              color: "#92d0e0",
            },
            value: {
              show: true,
              color: "#3a7aff",
              offsetY: 70,
              fontSize: "22px",
            },
          },
        },
      },
      fill: {
        type: "gradient", // تدرج لوني
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.7,
          gradientToColors: ["#ffb830"],
          opacityFrom: 1,
          opacityTo: 0.5,
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Volatility"],
      colors: ["#92d0e0"],
    },
  });

  return (
    <Box sx={{ bgcolor: "" }}>
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100vh" }}
          className="all-div"
          flexWrap={"wrap"}
        >
          <div>
            <div id="chart">
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="radialBar"
                height={350}
              />
            </div>
            <div id="html-dist"></div>
          </div>

          <Stack
  direction={{ xs: "column", sm: "column", md: "row" }}
  alignItems={{ xs: "center", sm: "center", md: "center" }}
  justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
  gap={{ xs: "30px", sm: "40px", md: "50px" }}
  className="bgcolor"
  sx={{
    padding: { xs: "20px", sm: "25px", md: "30px" },
    width: { xs: "90%", sm: "80%", md: "auto" },
    // margin: { xs: "0 auto" }
  }}
>
  <Box className='num1' >
    <Typography
      sx={{
        fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
        mb: 1,
        ml: { xs: 0, sm: 1, md: 3 },
        fontWeight: 500,
        color: "#3a7aff",
        textAlign: { xs: "center", md: "left" }
      }}
      variant="body2"
    >
      1500+
    </Typography>
    <Typography 
      variant="p" 
      sx={{ 
        color: "#fff",
        textAlign: { xs: "center", md: "left" },
        display: "block"
      }}
    >
      Templates Available
    </Typography>
  </Box>
  <Box className='num2'> 
    <Typography
      sx={{
        fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
        mb: 1,
        ml: { xs: 0, sm: 2, md: 5 },
        fontWeight: 500,
        color: "#3a7aff",
        textAlign: { xs: "center", md: "left" }
      }}
      variant="body2"
    >
      2K +
    </Typography>
    <Typography 
      variant="p" 
      sx={{ 
        color: "#fff",
        textAlign: { xs: "center", md: "left" },
        display: "block"
      }}
    >
      Happy Customers
    </Typography>
  </Box>
  <Box className='num3'>
    <Typography
      sx={{
        fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
        mb: 1,
        ml: { xs: 0, sm: 0, md: 1 },
        fontWeight: 500,
        color: "#3a7aff",
        textAlign: { xs: "center", md: "left" }
      }}
      variant="body2"
    >
      24 O/r
    </Typography>
    <Typography 
      variant="p" 
      sx={{ 
        color: "#fff",
        textAlign: { xs: "center", md: "left" },
        display: "block"
      }}
    >
      Support Available
    </Typography>
  </Box>
</Stack>
        </Stack>

        <Box sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: { xs: "90%", sm: "80%", md: "70%" },
    margin: "0 auto",
    padding: "20px"
}} >
    <Typography variant="h3" sx={{
        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        mb: 2,
        fontWeight: 600,
        color: "#3a7aff",
        textAlign: "center"
    }}> 
        What Our Customers Say
    </Typography>
    
    <Box sx={{ 
        display: 'flex', 
        gap: "15px", 
        justifyContent: "center", 
        mb: 3 
    }}>
        <Star sx={{ color: 'gold', fontSize: { xs: '1.5rem', md: '2rem' } }} />
        <Star sx={{ color: 'gold', fontSize: { xs: '1.5rem', md: '2rem' } }} />
        <Star sx={{ color: 'gold', fontSize: { xs: '1.5rem', md: '2rem' } }} />
        <Star sx={{ color: 'gold', fontSize: { xs: '1.5rem', md: '2rem' } }} />
        <Star sx={{ color: 'gold', fontSize: { xs: '1.5rem', md: '2rem' } }} />
    </Box>
    
    <Typography variant="body1" sx={{ 
        color: "#fff",
        fontSize: { xs: "1rem", sm:"1.2rem", md: "1.4rem" }, 
        lineHeight: 1.6,
        fontStyle: "italic",
        maxWidth: "85%",
        margin: "0 auto"
    }}>
        "The templates are incredibly well-designed and easy to customize. Saved us weeks of development time!"
    </Typography>
</Box>
      </Container>
    </Box>
  );
}
