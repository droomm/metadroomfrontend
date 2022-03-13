import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  width: 100vw;
  position: relative;

  .footerDivider {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(155px);
    height: 2.5px;
    border-radius: 150px;
  }
  svg {
    stroke: rgb(55 65 81);
  }
`;
