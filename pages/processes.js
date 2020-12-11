import React from "react";
import styled from "styled-components";
import ProcessesList from "../components/Processes";

export default function Processes() {
  return (
    <ContainerWrapper>
      <ProcessesList></ProcessesList>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 21px;
`;
