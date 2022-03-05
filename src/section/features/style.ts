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
  -webkit-mask-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0.65))
  );
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.65));
`;
