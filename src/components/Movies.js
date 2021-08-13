import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMovies } from "../redux/movies/MovieSlice";
import { Link } from "react-router-dom";
const Movies = () => {
  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Recomended for You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.cardImg} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Movies;
const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
`;
const Wrap = styled.div`
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
