import styled from "styled-components";
import Image from "next/image";
interface MemberContainerType {
  selected: boolean;
}
export const MemberContainer = styled.div<MemberContainerType>`
  ${(props) => {
    if (props.selected)
      return "background: linear-gradient(180deg, #382bd5 0%,  rgba(37, 25, 172, 0) 99.99%,  rgba(40, 28, 179, 0.160576) 100% );";
    else
      return `background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);`;
  }}
`;
export const Container = styled.div`
  min-width: 320px;
  padding-bottom: 50px;
  width: 100vw;
  min-height: 700px;
  height: 100%;
  position: relative;
  .quote {
    svg {
      fill: #fff;
    }
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
      top: 51.5%;
    }
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
  .member-detail {
    @media (min-width: 1700px) {
      padding-left: 40px;
      padding-right: 40px;
    }
    @media (min-width: 1000px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .member {
    width: 30%;
    @media (max-width: 1500px) {
      width: 50%;
    }
    @media (max-width: 1240px) {
      width: 90%;
    }
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;
