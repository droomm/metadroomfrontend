import styled from "styled-components";
import Image from "next/image";
interface containerType {
  selected: boolean;
}
export const Container = styled.div<containerType>`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border: ${(props) =>
    props.selected ? `3px solid ${props.theme.colors.primary}` : ""};
  color: ${(props) => `${props.theme.colors.white}cc`};
  .primaryText {
    color: ${(props) => `${props.theme.colors.primary}`};
  }

  .primaryBackground {
    background: ${(props) => `${props.theme.colors.primary}`};
  }
`;
