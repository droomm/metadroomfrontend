import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  position: relative;
  color: ${(props) => props.theme.colors.white}ff;
  .customHeroImage {
    top: 7rem;
    right: 15%;
    width: 450px;
    height: 450px;
    transition: all 0.8s ease-in-out;
    @media (min-width: 2350px) {
      width: 600px;
      height: 600px;
      right: 30%;
    }
    @media (max-width: 2350px) {
      width: 600px;
      height: 600px;
      right: 25%;
    }
    @media (max-width: 2200px) {
      width: 600px;
      height: 600px;
      right: 20%;
    }
    @media (max-width: 2000px) {
      width: 500px;
      height: 500px;
      right: 20%;
      top: 8.5rem;
    }
    @media (max-width: 1900px) {
      width: 500px;
      height: 500px;
      right: 15%;
      top: 8.5rem;
    }
    @media (max-width: 1800px) {
      width: 500px;
      height: 500px;
      right: 12.5%;
      top: 8.5rem;
    }
    @media (max-width: 1700px) {
      width: 475px;
      height: 475px;
      right: 7.5%;
      top: 9rem;
    }
    @media (max-width: 1600px) {
      width: 450px;
      height: 450px;
      right: 3.5%;
      top: 9rem;
    }
    @media (max-width: 1500px) {
      width: 400px;
      height: 400px;
      right: 2.5%;
      top: 11rem;
    }
    @media (max-width: 1400px) {
      width: 550px;
      height: 550px;
      right: 2.5%;
      top: 10rem;
    }
    @media (max-width: 700px) {
      width: 450px;
      height: 450px;
      right: 2.5%;
      top: 20rem;
    }
    @media (max-width: 500px) {
      display: none;
    }
  }
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
    background-image: linear-gradient(      
      45.05deg,
      #f8a8ff 26.98%,
      #6155ed 90.22%
      );
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
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 0.5px 2.5px #f8a8ff;
    :hover {
      box-shadow: 0px 0.5px 10px #f8a8ff;
    }
    :active {
      box-shadow: 0px 0.5px 10px #f8a8ff;
    }
    .shadow {
      box-shadow: 0px 0px 6.592983722686768px 0px #ffffff inset;
      box-shadow: 0px 0px 65.92984771728516px 0px #ffffff80;
      box-shadow: 0px 0px 17.03032875061035px 0px #ffffff80;
    }
    /* image-source: ; */
  }
  .right-button {
    background-color: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(16px) saturate(110%);
    border-radius: 50px;
    svg {
      fill: ${(props) => props.theme.colors.white};
    }
    max-width: 450px;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 0.5px 2.5px #f8a8ff;
    :hover {
      box-shadow: 0px 0.5px 10px #f8a8ff;
    }
    :active {
      box-shadow: 0px 0.5px 10px #f8a8ff;
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
