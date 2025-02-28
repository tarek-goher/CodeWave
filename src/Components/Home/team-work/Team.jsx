import React from 'react';
import { Box, Grid, Typography, Avatar, useMediaQuery, useTheme } from '@mui/material';

const TeamSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const teamMembers = [
    { id: 1, name: "TAREK Abdelkarim", position: "Frontend devolper", image: "https://i.pinimg.com/236x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg" },
    { id: 2, name: "Ahmed", position: "back end devolper", image: "https://i.pinimg.com/236x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg" },
    { id: 3, name: "Mohamed", position: "back end devolper", image: "https://i.pinimg.com/236x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg" },
    { id: 4, name: "Sara", position: "UI/UX Designer", image: "https://i.pinimg.com/236x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg" },
  ];

  return (
    <Box sx={{                         background: 'linear-gradient(to right, #426dc5, #5dc2bc)'
        , padding: '40px 20px', color: '#fff' }}>
      <Typography variant="h3" align="center" gutterBottom  sx={{color:"#0009" , fontFamily:"cursive", mb:6}}>
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map(member => (
          <Grid item xs={12} sm={6} md={3} key={member.id} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                alt={member.name}
                src={member.image}
                sx={{
                  width: 100,
                  height: 100,
                  margin: '0 auto',
                  border: '3px solid #fff',
                }}
              />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#000' }}>
                {member.position}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
