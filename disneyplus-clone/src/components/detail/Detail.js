import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://res.cloudinary.com/marin-dev/image/upload/v1643985933/disney%20%2B/images/login-background_e0n8yk.jpg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src="https://res.cloudinary.com/marin-dev/image/upload/v1643985932/disney%20%2B/images/logo_gzzwvw.svg"
          alt=""
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img
            src="https://res.cloudinary.com/marin-dev/image/upload/v1643985936/disney%20%2B/images/play-icon-black_vdvydm.png"
            alt=""
          />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img
            src="https://res.cloudinary.com/marin-dev/image/upload/v1643985934/disney%20%2B/images/play-icon-white_fgpeld.png"
            alt=""
          />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img
            src="https://res.cloudinary.com/marin-dev/image/upload/v1643985931/disney%20%2B/images/group-icon_oqiqt3.png"
            alt=""
          />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 7m Family, Fantaisy</SubTitle>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        itaque suscipit placeat alias eaque necessitatibus a deserunt facilis
        perspiciatis ducimus? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Distinctio, itaque suscipit placeat alias eaque
        necessitatibus a deserunt facilis perspiciatis ducimus? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Distinctio, itaque suscipit
        placeat alias eaque necessitatibus a deserunt facilis perspiciatis
        ducimus?
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 250px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 17px;
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  background: rgb (249, 249, 249);
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  border: 2px solid white;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
    color: black;
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: none;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.4);

  color: white;
  span {
    font-size: 38px;
  }
  height: 50px;
  width: 50px;
  margin-right: 10px;
  cursor: pointer;
`;
const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0, 0.9);
  cursor: pointer;
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.5;
  font-size: 20px;
  margin-top: 16px;
  color: rgb5249,249,249);

`;
