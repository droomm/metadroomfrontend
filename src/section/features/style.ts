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
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;
