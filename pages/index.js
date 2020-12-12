import React from "react";

import styled from "styled-components";
import Processes from "../components/Processes";
import Banner from "../components/Banner";
import Summary from "../components/Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <PreviewSection>
        <ContainerWrapper>
          <h3>Welcome to the official Gdynia decidim platform</h3>
          <h4>
            You can see all important processes that the city is participating
            in
          </h4>
        </ContainerWrapper>
      </PreviewSection>
      <ContainerWrapper>
        <Summary></Summary>
      </ContainerWrapper>
      <ContainerWrapper>
        <Processes></Processes>
      </ContainerWrapper>
    </div>
  );
};

export default Home;

const PreviewSection = styled.div`
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  h3 {
    font-size: 33px;
    text-align: center;
    font-weight: 400;
  }
  h4 {
    font-size: 21px;
    text-align: center;
    font-weight: 400;
  }
`;

const ContainerWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 21px;
`;
