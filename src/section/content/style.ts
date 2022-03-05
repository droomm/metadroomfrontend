import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  height: 100vh;

  background-color: #ffffff22;
  position: relative;
  .content-header {
    padding-top: 7.5vh;
    color: ${(props) => props.theme.colors.primary};
  }
  .content-card {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: fill;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0.65))
  );
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.65));
`;
