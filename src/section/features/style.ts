import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(287.15deg, #efafbc 0%, #c3e3fa 100%);

  .controller {
    svg {
      stroke: ${(props) => props.theme.colors.secondly};
    }
    .arrow {
      border-width: 2px;
    }
  }

  .glass {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(4px) saturate(110%);
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;
