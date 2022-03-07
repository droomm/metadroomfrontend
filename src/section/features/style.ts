import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  height: 100vh;
  position: relative;
  .top-padding {
    height: 25vh;
    @media (min-width: 630px) {
      height: 45vh;
    }
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;
