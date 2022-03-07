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
    height: 500px;
    @media (max-width: 420px) {
      height: 400px;
    }
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: cover;
`;
