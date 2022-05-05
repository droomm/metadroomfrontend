import styled from "styled-components";
import Image from "next/image";
interface SidePanelType {
  active: boolean;
}
export const Container = styled.div<SidePanelType>`
  color: ${(props) => props.theme.colors.white};
  overflow-x: hidden;
  .sidePanel {
    transition: background 0.4s ease-in-out;
    background: ${(props) =>
      true ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"};
    backdrop-filter: blur(5px);
  }
`;
interface SvgType {
  active: boolean;
}

export const SVGContainer = styled.div<SvgType>`
  cursor: pointer;
  width: 100%;
  svg {
    fill: ${(props) => {
      if (props.active) return props.theme.colors.primary;
      return `${props.theme.colors.white}75`;
    }};
    transition: fill 0.2s ease-in;
  }
  border-right: ${(props) =>
    props.active ? `2px solid ${props.theme.colors.primary}` : ""};
`;
