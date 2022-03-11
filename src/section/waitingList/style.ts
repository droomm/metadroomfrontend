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
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 0.5px 2.5px #6016fc77;
    :hover {
      box-shadow: 0px 0.5px 10px #6016fc55;
    }
    :active {
      box-shadow: 0px 0.5px 10px #6016fc99;
    }
  }
  .waitingListBackground {
    border-top-left-radius: 125px;
    @media (max-width: 770px) {
      border-top-left-radius: 1rem;
    }
    height: 95%;
    width: 96.5%;
    margin-left: 1.5%;
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;
