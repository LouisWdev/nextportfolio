import React from 'react'

const Contact = () => {
  return (
    <MainContainer>   
      <form>
        <FormData>Email</FormData>
        <FormData>Name</FormData>
        <FormData>Company</FormData>
        
        <button>Submit</button>
      </form>
    </MainContainer>
  )
}

export default Contact

/* STYLED COMPONENTS */

const MainContainer = styled.div``;