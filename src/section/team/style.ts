import styled from "styled-components";
import Image from "next/image";
interface MemberContainerType {
  selected: boolean;
}

export const Container = styled.div`
  min-width: 320px;
  padding-bottom: 50px;
  width: 100vw;
  min-height: 700px;
  height: 100%;
  position: relative;

  .logo {
    max-width: 225px;
    max-height: 75px;
  }

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
    @media (max-width: 600px) {
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
      width: 100%;
    }
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;

export const MarqueeContainer = styled.div`
  position: relative;
  width: 100vw;
  display: flex;

  align-items: center;
  height: 150px;
  overflow-x: hidden;
  margin-top: 50px;
  .track1 {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 177s linear infinite;
  }
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-51%);
    }
  }
`;
