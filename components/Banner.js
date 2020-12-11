import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <StyledBanner>
      <h1>Welcome to Gdynia</h1>
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled.div`
  height: 300px;
  width: 100%;
  background-image: url("/images/gdynia-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;
