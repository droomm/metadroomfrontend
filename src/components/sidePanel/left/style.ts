import styled from "styled-components";
import Image from "next/image";

interface SvgType {
  active: boolean;
}

export const SVGContainer = styled.div<SvgType>`
  cursor: pointer;
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

export const BottomSVGContainer = styled.div<SvgType>`
  cursor: pointer;
  svg {
    fill: ${(props) => {
      if (props.active) return props.theme.colors.primary;
      return `${props.theme.colors.white}75`;
    }};
    transition: fill 0.2s ease-in;
  }
`;
