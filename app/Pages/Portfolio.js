import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  return (
    
    <PortfolioContainer>
        <h3>Project name</h3>   
        <p>Project description</p>
        <button>Go to</button>
    </PortfolioContainer>
  )
}

export default Portfolio

const PortfolioContainer = styled.div``;

const PortfolioTitle = styled.h2``;
const SubText = styled.h3``;