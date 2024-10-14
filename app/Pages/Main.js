import styled from "styled-components"

const Main = () => {
  return (
  <>
    <h1>Welcome to my portfolio</h1>
    <h2>Feel free to look around my portfolio !</h2>

    <Buttons>
      <PortfolioButton>My Portfolio</PortfolioButton>
      <ContactButton>Contact Me</ContactButton>
      <AboutButton>About Me</AboutButton>
    </Buttons>


  </>
  )
}

export default Main

const Buttons = styled.div``;
const PortfolioButton = styled.button``;
const ContactButton = styled.button``;
const AboutButton = styled.button``;