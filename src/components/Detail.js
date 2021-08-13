import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg'
          alt=''
        />
      </Background>
      <ImageTitle>
        <img
          src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'
          alt=''
        />
      </ImageTitle>
      <Contorls>
        <PlayButton>
          <img src='/images/play-icon-black.png' alt='' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' alt='' />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatch>
          <img src='/images/group-icon.png' alt='' />
        </GroupWatch>
      </Contorls>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Contorls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 24px;
  letter-spacing: 1.8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatch = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
