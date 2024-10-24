import styled from "styled-components"

const navbar = () => {
  return (
    <NavbarContainer>
      <button>Home</button>
      
      <button>Contact</button>
      <button>Projects</button>
      <button>About Me</button>
    </NavbarContainer>
  )
}

export default navbar

const NavbarContainer = styled.div``;