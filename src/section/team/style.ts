import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  min-width: 320px;
  background-color: ${(props) => `${props.theme.colors.primary}22`};
  padding-bottom: 50px;
  position: relative;
  .content-header {
    padding-top: 7.5vh;
    color: ${(props) => props.theme.colors.primary};
  }
  .content-card {
    color: ${(props) => props.theme.colors.text};
  }
  .avatar-box {
    border-color: ${(props) => props.theme.colors.black}99;
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
