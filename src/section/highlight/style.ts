import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  padding-bottom: 50px;
  position: relative;
  .highligh-box {
    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;
