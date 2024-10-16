import styled from "styled-components"

const Main = () => {
  return (
  <>
    <MainTitle>Welcome to my portfolio</MainTitle>
    <SecondTitle>Feel free to look around my portfolio !</SecondTitle>

    <Buttons>
        <PortfolioButton>My Portfolio</PortfolioButton>
        <ContactButton>Contact Me</ContactButton>
        <AboutButton>About Me</AboutButton>
    </Buttons>


  </>
  )
}

export default Main

const MainTitle = styled.h1``;
const SecondTitle = styled.h2``;

const Buttons = styled.div``;
const PortfolioButton = styled.button``;
const ContactButton = styled.button``;
const AboutButton = styled.button``;