import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  height: 110vh;
  @media (max-width: 420px) {
    height: 100vh;
  }
  position: relative;

  color: ${(props) => props.theme.colors.primary};
  .row-title,
  .row-letter {
    position: relative;
    display: inline-block;
    white-space: nowrap;
  }

  .top-text {
    @media (max-width: 545px) {
      font-size: 3.05rem /* 48px */;
      line-height: 1;
    }
    @media (max-width: 420px) {
      font-size: 2.5rem /* 36px */;
      line-height: 3rem /* 40px */;
    }
    @media (max-width: 400px) {
      font-size: 2.35rem /* 36px */;
      line-height: 3rem /* 40px */;
    }
    @media (max-width: 360px) {
      font-size: 2.25rem /* 36px */;
      line-height: 2.5rem /* 40px */;
    }
  }
  .bottom-text {
    @media (max-width: 420px) {
      font-size: 2.15rem /* 36px */;
      line-height: 2.5rem /* 40px */;
    }
    @media (max-width: 360px) {
      font-size: 2.05rem /* 36px */;
      line-height: 2.5rem /* 40px */;
    }
  }
  .left-button {
    border: 3px solid ${(props) => props.theme.colors.text}99;
    color: ${(props) => props.theme.colors.text}dd;
    transition: border 0.4s solid;

    :hover {
      border: 3px solid ${(props) => props.theme.colors.text}cc;
      color: ${(props) => props.theme.colors.text}df;
    }
    :active {
      border: 3px solid ${(props) => props.theme.colors.text};
      color: ${(props) => props.theme.colors.text};
    }
    background: transparent;
  }
  .right-button {
    background: ${(props) => props.theme.colors.primaryBackground};
    border: 3px solid ${(props) => props.theme.colors.primaryBackground};
    color: ${(props) => props.theme.colors.primary}dd;
    transition: border 0.4s solid;

    :hover {
      color: ${(props) => props.theme.colors.primary}ff;
    }
    :active {
    }
  }
  .hero-Image {
    height: 60vh;
    @media (max-width: 800px) {
      height: 500px;
    }
    @media (max-width: 630px) {
      height: 400px;
    }
    @media (max-width: 420px) {
      height: 300px;
    }
    @media (max-width: 530px) {
      width: 90vw;
    }
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0.85))
  );
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.85));
`;
