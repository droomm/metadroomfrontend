import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  .glass-border {
    border-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);

    svg {
      fill: ${(props) => `${props.theme.colors.primaryBackground}75`};
    }
  }

  .arrow-box {
    svg {
      stroke: ${(props) => `${props.theme.colors.primaryBackground}`};
    }
  }
  .button-Container {
    svg {
      fill: ${(props) => `${props.theme.colors.primaryBackground}`};
    }
  }
`;
