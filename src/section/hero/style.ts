import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  position: relative;
  color: ${(props) => props.theme.colors.white}ff;

  .motdGradient {
    background: -webkit-linear-gradient(
      45.05deg,
      #f8a8ff 26.98%,
      #6155ed 90.22%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .topText {
    font-size: 7rem;
    line-height: 1;
  }

  .bottomTextBig {
    font-size: 9rem;
    line-height: 1;
  }
  .minor-text {
    max-width: 800px;
  }
  @media (max-width: 1800px) {
    .minor-text {
      width: 70%;
    }
  }
  @media (max-width: 1000px) {
    .minor-text {
      width: 95%;
    }
  }
  @media (max-width: 1330px) {
    .topText {
      font-size: 6.5rem;
      line-height: 1;
    }

    .bottomTextBig {
      font-size: 7rem;
      line-height: 1;
    }
    .box-left {
      margin-top: 15px;
    }
  }

  @media (min-width: 1354px) {
    .box-left {
      margin-left: 1rem;
    }

    .bottomTextBig {
      font-size: 8rem;
      line-height: 1;
    }
  }

  @media (max-width: 1024px) {
    .topText {
      font-size: 6.5rem;
      line-height: 1;
    }

    .bottomTextBig {
      font-size: 6.5rem;
      line-height: 1;
    }
  }
  .top-to {
    display: none;
  }
  .bottom-to {
    display: flex;
  }
  @media (min-width: 923px) {
    .top-to {
      display: none;
    }
    .bottom-to {
      display: flex;
    }
  }
  @media (max-width: 924px) {
    .topText {
      font-size: 6rem;
      line-height: 1;
    }
    .bottomTextBig {
      font-size: 6rem;
      line-height: 1;
    }
    .top-to {
      display: flex;
    }
    .bottom-to {
      display: none;
    }
  }
  @media (max-width: 846px) {
    .topText {
      font-size: 5rem;
      line-height: 1;
    }
    .bottomTextBig {
      font-size: 5rem;
      line-height: 1.45;
    }
    .top-to {
      display: flex;
    }
    .bottom-to {
      display: none;
    }
  }

  @media (max-width: 634px) {
    .topText {
      font-size: 5rem;
      line-height: 1;
    }

    .bottomTextBig {
      font-size: 5rem;
      line-height: 1.5;
    }
    .box-left {
      margin-top: 5px;
    }
  }

  @media (max-width: 579px) {
    .topText {
      font-size: 6rem;
      line-height: 1.05;
    }

    .bottomTextBig {
      font-size: 5rem;
      line-height: 0;
    }
    .box-left {
      margin-top: 20px;
    }
  }
  @media (max-width: 460px) {
    .topText {
      font-size: 5.5rem;
      line-height: 1;
    }

    .bottomTextBig {
      font-size: 4.5rem;
      line-height: 1;
    }
    .box-left {
      margin-top: 10px;
    }
  }

  @media (max-width: 420px) {
    .topText {
      font-size: 4.75rem;
      line-height: 1;
    }

    .bottomTextBig {
      font-size: 4rem;
      line-height: 1;
    }
    .box-left {
      margin-top: 15px;
    }
  }

  @media (max-width: 390px) {
    .topText {
      font-size: 4.15rem;
      line-height: 1;
    }

    .bottomTextBig {
      font-size: 3.65rem;
      line-height: 1;
    }
    .box-left {
      margin-top: 15px;
    }
  }
  @media (max-width: 360px) {
    .topText {
      font-size: 3.75rem;
      line-height: 1;
    }

    .bottomTextBig {
      font-size: 3.25rem;
      line-height: 1;
    }
    .box-left {
      margin-top: 15px;
    }
  }

  .heroImage {
    width: 450px;
    height: 450px;
  }
  svg {
    stroke: ${(props) => props.theme.colors.white};
  }

  .welcome-box {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(16px) saturate(110%);
  }
  .left-button {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(16px) saturate(110%);
    border-radius: 50px;
    svg {
      stroke: ${(props) => props.theme.colors.black};
    }
    max-width: 450px;
  }
  .right-button {
    background-color: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(16px) saturate(110%);
    border-radius: 50px;
    svg {
      fill: ${(props) => props.theme.colors.white};
    }
    max-width: 450px;
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
