import React, { useEffect } from "react";
import styled from "styled-components";
import db from "../firebase";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewrs from "./Viewrs";
import movieReducer, { setMovies } from "../redux/movies/MovieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        // console.log(doc.data());
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
      console.log(tempMovies);
    });
  }, []);
  return (
    <Container>
      <ImageSlider></ImageSlider>
      <Viewrs></Viewrs>
      <Movies></Movies>
    </Container>
  );
};

export default Home;
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
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
