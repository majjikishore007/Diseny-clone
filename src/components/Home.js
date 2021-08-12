import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
const Home = () => {
  return (
    <Container>
      <ImageSlider></ImageSlider>
    </Container>
  );
};

export default Home;
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  /* width: 100%; */
  position: relative;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: -1;
  }
`;
