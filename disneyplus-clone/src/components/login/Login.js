import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Background>
        <img
          src="https://res.cloudinary.com/marin-dev/image/upload/v1643985933/disney%20%2B/images/login-background_e0n8yk.jpg"
          alt=""
        />
      </Background>
      <Contenu>
        <ButtonPart>
          <LogoTop>
            <img
              src="https://res.cloudinary.com/marin-dev/image/upload/v1643985932/disney%20%2B/images/cta-logo-one_tvyqxk.svg"
              alt=""
            />
          </LogoTop>
          <Button>GET ALL THERE</Button>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            quidem nisi quam facilis accusantium dolor doloribus asperiores
            laborum incidunt voluptas odit autem recusandae placeat, molestias
            veniam sint, eligendi voluptatem tempora, aliquid esse. Architecto,
            aperiam dolores?
          </span>
          <LogoBottom>
            <img
              src="https://res.cloudinary.com/marin-dev/image/upload/v1643985931/disney%20%2B/images/cta-logo-two_leknd6.png"
              alt=""
            />
          </LogoBottom>
        </ButtonPart>
      </Contenu>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 300px 40px;
`;

const Background = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  img {
    top: 70px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Contenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 850px;
`;
const LogoTop = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  padding-bottom: 25px;
`;
const ButtonPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 850px;
  span {
    text-align: center;
  }
`;
const Button = styled.button`
  background-color: #0483ee;
  color: white;
  padding: 10px 20px;
  margin-bottom: 25px;
  border-radius: 8px;
  font-size: 25px;
  font-weight: 600;
  height: 70px;
  letter-spacing: 2.5px;
  cursor: pointer;
`;
const LogoBottom = styled.div`
  margin-top: 25px;
  img {
    width: 100%;
    height: 100%;
  }
`;
