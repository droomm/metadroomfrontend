import styled from "styled-components";
interface LayoutContainerData {
  background?: string;
}
export const LayoutContainer = styled.div<LayoutContainerData>`
  background-color: ${(props) =>
    props.background ? props.background : props.theme.colors.primaryBackground};
  color: ${(props) => props.theme.colors.text};
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  scroll-margin-top: 50px;
  scroll-behavior: smooth;

  /* width */
  ::-webkit-scrollbar {
    width: 7.5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px ${(props) => props.theme.colors.primaryBackground};
    border-radius: 10px;
    background: ${(props) => props.theme.colors.primary};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primary};
  }
  .background {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(5px);
  }
`;
