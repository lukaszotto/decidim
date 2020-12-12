import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderWrap>
      <LoaderStyled>
        <i class="fa fa-circle-notch"></i>
      </LoaderStyled>
    </LoaderWrap>
  );
};

export default Loader;

const LoaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoaderStyled = styled.div`
  display: inline-block;
  font-size: 30px;
  color: #12203d;
  animation: rotation 2s infinite linear;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
