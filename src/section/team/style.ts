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
    max-width: 250px;
    max-height: 100px;
    @media (max-width: 670px) {
      max-width: 125px;
      max-height: 50px;
    }
    @media (max-width: 420px) {
      max-width: 115px;
      max-height: 75px;
    }
  }
  .logo0 {
    max-width: 300px;
    max-height: 200px;
    @media (max-width: 670px) {
      max-width: 150px;
      max-height: 100px;
    }
    @media (max-width: 420px) {
      max-width: 125px;
      max-height: 100px;
    }
  }

  .logo1 {
    max-width: 300px;
    max-height: 75px;
    @media (max-width: 670px) {
      max-width: 125px;
      max-height: 45px;
    }
    @media (max-width: 420px) {
      max-width: 120px;
      max-height: 100px;
    }
  }

  .logo2 {
    max-width: 200px;
    max-height: 65px;
    @media (max-width: 670px) {
      max-width: 100px;
      max-height: 50px;
    }
    @media (max-width: 420px) {
      max-width: 75px;
      max-height: 100px;
    }
  }

  .logo4 {
    max-width: 125px;
    max-height: 125px;
    @media (max-width: 670px) {
      max-width: 65px;
      max-height: 65px;
    }
    @media (max-width: 420px) {
      max-width: 45px;
      max-height: 45px;
    }
  }

  .logo6 {
    max-width: 250px;
    max-height: 100px;
    @media (max-width: 670px) {
      max-width: 125px;
      max-height: 50px;
    }
    @media (max-width: 420px) {
      max-width: 100px;
      max-height: 50px;
    }
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
