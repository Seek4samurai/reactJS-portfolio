import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { lightTheme } from './themes'
import LogoComp from '../subComponents/LogoComp'
import SocialIcons from '../subComponents/SocialIcons'
import HomeButton from '../subComponents/HomeButton'
import ParticleComponentAbout from '../Particles/ParticleComponentAbout'
import img from '../assets/Images/profile.png'
// import ImgParticles from '../Particles/ImgParticles'
// import Particles from 'react-particles-js'

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  ${'' /* background-color: ${props => props.theme.body}; */}

  overflow: hidden;
`

const float = keyframes`
  0%
  {
    transform: translateY(-15px);
  }
  50%
  {
    transform: translateY(-30px) translateX(15px);
  }
  100%
  {
    transform: translateY(-15px);
  }
`

const Meh = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  width: 30vw;
  z-index: 99;
  
  animation: ${float} 4s ease infinite;

  img{
    transform: rotate(15deg);
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 4px #000);
  }
`

const Main = styled.div`
  position: absolute;
  top: 10rem;
  left: calc(5rem + 5vw);

  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);

  color: ${props => props.theme.text};
  font-family: 'poppins', sans-serif;
  font-size: calc(0.6rem + 0.8vw);
  line-height: 1.5;
  padding: 2rem;
  height: 50vh;
  width: 50vw;

  border: 4px solid ${props => props.theme.text};
  border-radius: 15px;

  z-index: 3;
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}>
        <LogoComp></LogoComp>
        <SocialIcons></SocialIcons>
        <HomeButton></HomeButton>
        <Box>
          <Meh>
            <img src={img} alt='Meh' />
          </Meh>
          <Main>
            Hi, nice to meet you👋🏾 <br></br><br></br>
            I'm Gourav and I'm from Indore, a city in India 🌏 and I love doing web-development, and working on UI/UX designs.
            Apart from these really love to play with data-structures📅 and problem solving things😎, using C++ for those and Python for data studies.
            <br></br><br></br>🚀I've also done some freelancing works since few years on different platforms.
            <br></br><br></br>🚀I also like to do maths ✏️ on weekends.
          </Main>
        </Box>
        <ParticleComponentAbout></ParticleComponentAbout>
      </motion.div>
    </ThemeProvider>
  )
}

export default AboutPage
