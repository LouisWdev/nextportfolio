import React from 'react'

const Contact = () => {
  return (
    <MainContainer>   
     <FormContainer>
      <form>
        <FormData>Email</FormData>
        <FormData>Name</FormData>
        <FormData>Company</FormData>
        
        <button>Submit</button>
      </form>
     </FormContainer>
    </MainContainer>
  )
}

export default Contact

/* STYLED COMPONENTS */

const MainContainer = styled.div``;
const FormContainer = styled.div``;
const FormButtonEmail = styled.div``;