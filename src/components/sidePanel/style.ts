import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  overflow-x: hidden;
  .side-panel {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
  }
`;
