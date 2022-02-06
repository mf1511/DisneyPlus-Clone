import React from "react";
import styled from "styled-components";

import("./Movies.css");

function Movies() {
  return (
    <Container>
      <h4>Recommended for You </h4>
      <Content>
        <Wrap>
          <img
            src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?fit=2000%2C1125"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://static1.terrafemina.com/articles/8/36/12/48/@/543459-photo-du-film-disney-encanto-622x0-1.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.cafedeclic.com/assets/img/000/075/large/voici-les-10-futurs-films-disney-a-paraitre-au-cours-des-3-prochaines-annees.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://file1.telestar.fr/var/telestar/storage/images/3/3/4/8/3348954/raiponce-pourquoi-disney-fut-critique-pour-avoir-change-titre-film.jpg?alias=original"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2021-04/Capture%20d%E2%80%99e%CC%81cran%202021-04-29%20a%CC%80%2015.33.09.png"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.disneyphile.fr/wp-content/uploads/2020/12/encanto.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://blog.flunch.fr/wp-content/uploads/2020/02/Affiche-film-2.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.geekgeneration.fr/wp-content/uploads/2019/06/Toy-Story-4-2.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://radiodisneyclub.fr/wp-content/uploads/2017/11/p19-1280x720.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://resize-elle.ladmedia.fr/rcrop/1098,768/img/var/plain_site/storage/images/loisirs/cinema/news/disney-a-trouve-son-actrice-pour-incarner-blanche-neige-3933389/94987001-1-fre-FR/Disney-a-trouve-son-actrice-pour-incarner-Blanche-Neige.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.films-disney.fr/wp-content/uploads/2018/05/cendrillon.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i.ytimg.com/vi/Eu2oOo2zRLo/maxresdefault.jpg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
