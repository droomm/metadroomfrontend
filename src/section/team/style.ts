import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  padding-bottom: 50px;
  width: 100vw;
  min-height: 700px;
  height: 100%;
  position: relative;
  .team-box {
    background-color: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(5px);
  }
  .content-header {
    padding-top: 7.5vh;
    color: ${(props) => props.theme.colors.primary};
  }
  .content-card {
    color: ${(props) => props.theme.colors.text};
  }
  .avatar-box {
    border-color: ${(props) => props.theme.colors.white}99;
  }
  .team-video {
    display: block;
    position: absolute;
    top: 54%;
    @media (max-width: 630px) {
      top: 52.5%;
    }
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;
