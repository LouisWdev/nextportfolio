import React from 'react'

const Contact = () => {
  return (
    <MainContainer>   
     <FormContainer>
        <FormButtonEmail><FormData>Email</FormData></FormButtonEmail>
        <FormButtonName><FormData>Name</FormData></FormButtonName>
        <FormButtonCompnay><FormData>Company</FormData></FormButtonCompnay>
        
        <FormSubmitButton>Submit</FormSubmitButton>
     </FormContainer>
    </MainContainer>
  )
}

export default Contact

/* STYLED COMPONENTS */

const MainContainer = styled.div``;
const FormContainer = styled.form``;

const FormButtonEmail = styled.div``;
const FormButtonName = styled.div``;
const FormButtonCompnay = styled.div``;
const FormSubmitButton = styled.button``;
