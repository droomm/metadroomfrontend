import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  min-height: 100vh;
  position: relative;

  .controller {
    svg {
      stroke: ${(props) => props.theme.colors.secondly};
    }
    .arrow {
      border-width: 2px;
    }
  }

  .glass {
    background-color: #87c2e599;
    backdrop-filter: blur(7px) saturate(110%);
  }

  .welcome-box {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(16px) saturate(110%);
  }

  .feature2Image {
    height: 650px;
    width: 650px;
    top: 20%;
    @media (max-width: 1800px) {
      height: 550px;
      width: 550px;
    }
    @media (max-width: 1000px) {
      height: 500px;
      width: 500px;
    }
  }
  .featureImage {
    height: 400px;
    width: 650px;
    top: 20%;
    @media (max-width: 1800px) {
      height: 350px;
      width: 550px;
    }
    @media (max-width: 1000px) {
      height: 200px;
      width: 500px;
    }
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;
