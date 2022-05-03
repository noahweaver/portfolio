import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function ComingSoon() {

  return (
	<Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5%"}}>
		<Box>
			<Typography 
                variant="h3" 
                sx={{fontFamily: "'Rock Salt', cursive", paddingBottom: "15px"}} 
                className="name font-rocksalt">Noah Weaver</Typography>
			<Typography 
                variant="h5" 
                sx={{fontFamily: "'Rock Salt', cursive"}} 
                className="occupation font-rocksalt">Software Developer</Typography>
		</Box>
            <img className="wait-for-it" alt="wait-for-it-bitmoji" src="https://sdk.bitmoji.com/render/panel/20011554-287297947_5-s4-v1.png?transparent=1&palette=1&scale=2"/>
            <Typography variant="subtitle1" sx={{fontFamily: "'khand', cursive", paddingBottom: "15px", textAlign: "center" }} >My portfolio is still under construction. Please check me out at one of the links below!</Typography>
		<Box sx={{ display: "flex", width: "25%", justifyContent: "space-evenly" }}>
            <a href="https://github.com/noahweaver">
                <GitHubIcon className="icon" sx={{ fontSize: "50px"}}/>
            </a>
            <a href="https://www.linkedin.com/in/weaver-noah/">
                <LinkedInIcon className="icon" sx={{ fontSize: "50px"}} />
            </a>
		</Box>
	</Container>
  )
}

export default ComingSoon;