import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  padding-bottom: 50px;
  min-height: 400px;
  position: relative;
  .highligh-box {
    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }
  .join-button {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(16px) saturate(110%);
    border-radius: 50px;
    svg {
      stroke: ${(props) => props.theme.colors.black};
    }
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;
