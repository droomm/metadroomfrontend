import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100vw;
  height: 7.5vh;
  min-width: 320px;
  color: ${(props) => props.theme.colors.text};
  .right-corner {
    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }
  .divider {
    width: 3px;
    height: 60%;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(50px);
  }
  .mobile-panel {
    svg {
      cursor: pointer;
      fill: ${(props) => props.theme.colors.white};
      :hover {
        fill: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
