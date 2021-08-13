import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Nav>
      <Logo src='/images/logo.svg'></Logo>

      <NavMenu>
        <a>
          <img src='/images/home-icon.svg' alt='Home' />
          <span>Home</span>
        </a>
        <a>
          <img src='/images/search-icon.svg' alt='Search' />
          <span>SEARCH</span>
        </a>
        <a>
          <img src='/images/original-icon.svg' alt='' />
          <span>ORIGININALS</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg' alt='' />
          <span>MOVIES</span>
        </a>
        <a>
          <img src='/images/series-icon.svg' alt='' />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src='https://avatars.githubusercontent.com/u/53621314?v=4'></UserImage>
    </Nav>
  );
};

export default Header;
const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background: #090b13;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  /* border: 1px solid white; */
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      /* after tag */
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        background-color: white;
        transform-origin: center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
        opacity: 0;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
