import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "../image slider/ImageSlider";
import Movies from "../movies/Movies";
import Viewers from "../viewers/Viewers";
import { db } from "../../firebase";

// import firebase from "firebase/compat/app";

import("./Home.css");

function Home() {
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      console.log(snapshot);
    });
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("https://res.cloudinary.com/marin-dev/image/upload/v1643985932/disney%20%2B/images/home-background_tf63pg.png")
      center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;
