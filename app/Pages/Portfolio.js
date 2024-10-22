import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <>
      <TitleContainer>
          <PortfolioTitle>
            Welcome to the portfolio section
          </PortfolioTitle>
          <SubText>
            Here you can view and interact with my portfolio 
          </SubText> 
      </TitleContainer>

      <PortfolioContainer>
          <h3>Project name</h3>   
          <p>Project description</p>
          <Image alt=""/>
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