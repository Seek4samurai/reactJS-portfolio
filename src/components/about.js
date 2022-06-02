import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { lightTheme } from "./themes";
import SocialIcons from "../subComponents/SocialIcons";
import HomeButton from "../subComponents/HomeButton";
import ParticleComponentAbout from "../Particles/ParticleComponentAbout";
import img from "../assets/Images/cuteAnimal.png";
import BackText from "../subComponents/BigText";

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;

  overflow: hidden;
`;

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
`;

const disco = keyframes`
  0%
  {
    filter:hue-rotate(90deg);
  }
  50%
  {
    filter:hue-rotate(180deg);
  }
  100%
  {
    filter:hue-rotate(90deg);
  }
`;

const Meh = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  width: 30vw;
  z-index: 99;

  animation: ${float} 4s ease infinite;

  img {
    transform: rotate(15deg);
    width: 100%;
    height: auto;
    animation: ${disco} 1s ease infinite;
  }
`;

const Main = styled.div`
  position: absolute;
  top: 10rem;
  left: calc(5rem + 5vw);

  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);

  color: ${(props) => props.theme.text};
  font-family: "poppins", sans-serif;
  font-size: calc(0.6rem + 0.8vw);
  line-height: 1.5;
  padding: 2rem;
  height: 50vh;
  width: 50vw;

  border: 4px solid ${(props) => props.theme.text};
  border-radius: 15px;

  z-index: 5;

  @media only screen and (max-width: 548px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <SocialIcons></SocialIcons>
        <HomeButton></HomeButton>
        <Box>
          <Meh>
            <img src={img} alt="Meh" />
          </Meh>
          <Main>
            Hi, nice to meet you👋🏾 <br></br>
            I'm Gourav Singh Rawat, from India. 19 years old 🧔(with lil beard
            for some reason) who keeps on looking for better opportunities 👩‍💻
            and great minds 👥 to work with. I like to work on Web 🌎 & dApp 🔗
            development and with cloud technologies ☁️ like Firebase, AWS and
            Microsoft Azure.
            <br></br>
            <br></br>
            🚀 I'm also a web3 & AI enthusiast.
            <br></br>
            <br></br>
            🚀 I also like to do maths ✏️ on weekends.
          </Main>
        </Box>
        <BackText text="About" top="6%" right="20%"></BackText>
        <ParticleComponentAbout></ParticleComponentAbout>
      </motion.div>
    </ThemeProvider>
  );
};

export default AboutPage;
