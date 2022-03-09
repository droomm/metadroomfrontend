import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  padding-bottom: 50px;
  position: relative;
  .content-header {
    padding-top: 7.5vh;
    color: ${(props) => props.theme.colors.primary};
  }
  .content-card {
    color: ${(props) => props.theme.colors.text};
  }
  .content-image-box {
    height: 900px;
    max-width: 940px;
    @media (max-width: 2024px) {
      height: 700px;
      max-width: 740px;
    }
    @media (max-width: 1524px) {
      height: 600px;
      max-width: 640px;
    }
    @media (max-width: 820px) {
      height: 400px;
      max-width: 440px;
    }
    @media (max-width: 420px) {
      height: 300px;
      max-width: 340px;
    }
  }
  .detail {
    /* max-width: 800px; */
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
`;
