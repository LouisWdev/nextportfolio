import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <>
      <TitleContainer>
       <PortfolioTitle />
       <SubText /> 
      </TitleContainer>

      <PortfolioContainer>
          <h3>Project name</h3>   
          <p>Project description</p>
          <button>Go to</button>
      </PortfolioContainer>
      </>
  )
}

export default Portfolio

const PortfolioContainer = styled.div``;

const TitleContainer = style.div``;
const PortfolioTitle = styled.h2``;
const SubText = styled.h3``;