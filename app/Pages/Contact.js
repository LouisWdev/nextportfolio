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

const FormButtonContainer = styled.div``;

const FormButtonEmail = styled.div``;
const FormButtonName = styled.div``;
const FormButtonCompnay = styled.div``;
const FormSubmitButton = styled.button``;
