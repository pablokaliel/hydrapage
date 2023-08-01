import styled from "styled-components";
import bgtechnologies from "../../assets/technologies.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Swapper = styled.div`
  padding: 50px 84px;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const DivUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 42px;

  li {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;

    transition: all 0.3s;

    &:hover {
      scale: 1.1;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 38px;

  button {
    width: 155px;
    height: 48px;

    border-radius: 40px;
    border: 2px solid white;
    color: #fff;
    background-color: transparent;

    transition: all 0.3s;

    &:hover {
      background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
      border: 0;
      color: #000;
    }
  }
`;

export const HeroSection = styled.div`
  margin-top: 140px;
`;

export const DivBuild = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .imageWoman {
    position: relative;
    overflow: hidden;

    border-radius: 100px 100px 100px 240px;
    background: rgba(0, 0, 0, 0.13);
    box-shadow: 1px 1px 5px 21px rgba(0, 0, 0, 0.13);

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Build = styled.div`
  display: flex;
  flex-direction: column;

  gap: 36px;
  max-width: 550px;

  .rotate {
    transform: rotate(250deg);
  }

  .abolut {
    position: absolute;
    top: 5px;
    right: 100px;
    z-index: -1;
  }

  div {
    display: flex;
    align-items: center;
    gap: 50px;

    button {
      width: 214px;
      height: 48px;

      border: 0;
      border-radius: 40px;
      background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);

      transition: all 0.3s;

      &:hover {
        background: linear-gradient(90deg, #272337 0%, #574c89 100%);
        color: #fff;
      }
    }
  }

  h1 {
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
  }

  span {
    background: linear-gradient(227deg, #c0b7e8 0%, #8176af 100%);
    background-clip: text;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: Montserrat;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const DivContact = styled.div`
  display: flex;

  margin-top: 98px;
  padding: 29px;

  border-radius: 90px;
  background: radial-gradient(
    2900.76% 50.13% at 50% 53.89%,
    rgba(58, 52, 86, 0.95) 0%,
    #211e2e 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(192, 183, 232, 0.01);

  .none {
    border: 0;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 25px;

  border-right: 1px solid #c0b7e854;

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;

    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const AboutSection = styled.div`
  display: flex;
  margin-top: 90px;
  gap: 100px;
`;

export const DivIntroduction = styled.div`
  display: flex;
  gap: 18px;

  h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
  }

  span {
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

export const DivImage = styled.div`
  width: 524px;
  height: 557px;
  overflow: hidden;

  border-radius: 240px 100px;
  background: #a3a3a3;
  box-shadow: 1px 1px 5px 21px rgba(0, 0, 0, 0.13);
`;

export const DivWhy = styled.div`
  display: flex;
  gap: 18px;

  h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
  }

  span {
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

export const RightAbout = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 40px;
  }

  h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
  }

  p {
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
  }

  button {
    width: 214px;
    height: 48px;
    margin-top: 40px;

    border-radius: 40px;
    background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
    border: 0;

    transition: all 0.3s;

    &:hover {
      background: linear-gradient(90deg, #272337 0%, #574c89 100%);
      color: #fff;
    }
  }
`;

export const CardSection = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 100px;
  gap: 12px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 511px;

  border-radius: 40px;
  background: radial-gradient(50% 50% at 50% 50%, #433d60 0%, #211e2e 100%);

  padding: 22px;
  gap: 24px;

  transition: all 0.3s;

  &:hover {
    scale: 1.04;
  }

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  }

  span {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }

  button {
    width: 154px;
    height: 48px;

    border-radius: 40px;
    border: 0;
    background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);

    transition: all 0.3s;

    &:hover {
      background: linear-gradient(90deg, #272337 0%, #574c89 100%);
      color: #fff;
    }
  }
`;

export const ImgCard = styled.div`
  width: 190px;
  height: 190px;
  overflow: hidden;

  box-shadow: 1px 1px 5px 21px rgba(14, 14, 14, 0.32);
  border-radius: 999px;
`;

export const Divider = styled.div`
  width: 154px;
  height: 1px;

  background-color: rgba(192, 183, 232, 0.33);
`;

export const TechnologiesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  .logos {
    display: flex;
    justify-content: space-between;

    margin-top: 24px;
    width: 100%;
  }

  .technologies {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    position: relative;
    margin-top: 100px;

    width: 1278px;
    height: 260px;

    border-radius: 999px;
    background: linear-gradient(
        0deg,
        rgba(48, 44, 66, 0.79) 0%,
        rgba(48, 44, 66, 0.79) 100%
      ),
      url(${bgtechnologies}), lightgray 50% / cover no-repeat;

    h1 {
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
    }

    p {
      font-size: 36px;
      font-style: normal;
      font-weight: 300;
    }

    button {
      width: 60px;
      height: 60px;

      position: absolute;
      bottom: -27px;

      background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
      border-radius: 100%;
      border: 0;
      box-shadow: 1px 1px 2px 9px rgb(0 0 0 / 48%);

      transition: all 0.3s;

      &:hover {
        background: linear-gradient(90deg, #272337 0%, #574c89 100%);
        color: #fff;
      }
    }
  }
`;

export const ProgressSection = styled.div``;

export const HowBuild = styled.div`
  display: flex;
  gap: 55px;
`;

export const DivProgress = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 100px;

  position: relative;

  .LineBtn {
    position: absolute;
    z-index: -1;
    top: -30px;
  }
`;

export const BtnProgress = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;
  }

  button {
    width: 159px;
    height: 159px;

    box-shadow: 1px 1px 2px 9px rgba(13, 13, 13, 0.32);
    color: #343045;
    background: linear-gradient(251deg, #c0b7e8 0%, #8176af 100%);
    border: 0;
    border-radius: 100%;

    font-size: 64px;
    font-style: normal;
    font-weight: 700;

    transition: all 0.3s;

    &:hover {
      background: linear-gradient(90deg, #272337 0%, #574c89 100%);
      color: #fff;
    }
  }
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
`;

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 30px;
  padding: 100px;

  width: 1275px;

  border-radius: 100px;
  background: radial-gradient(50% 50% at 50% 50%, #403a5f 0%, #211e2e 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  button {
    width: 214px;
    height: 48px;

    border-radius: 40px;
    background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
    border: 0;

    transition: all 0.3s;

    &:hover {
      background: linear-gradient(90deg, #272337 0%, #574c89 100%);
      color: #fff;
    }
  }
`;

export const DividerForm = styled.div`
  width: 414px;
  height: 1px;

  background-color: rgba(192, 183, 232, 0.33);
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;

  .inputs {
    display: flex;
    flex-direction: column;

    gap: 33px;

    input {
      width: 100%;
      height: 72px;

      background: transparent;
      color: #fff;
      padding: 0 40px;

      font-size: 14px;
      font-style: normal;
      font-weight: 400;

      border-radius: 40px;
      border: 2px solid #fff;
    }
  }
`;

export const DivName = styled.div`
  display: flex;

  gap: 12px;

  div {
    width: 524px;
    height: 72px;

    border-radius: 40px;
    border: 2px solid #fff;

    input {
      width: 100%;
      height: 100%;

      padding: 0 40px;

      border-radius: 40px;
      background-color: transparent;
      border: 0;
      color: #fff;

      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

export const DivInfo = styled.div`
  display: flex;
  gap: 12px;

  div {
    width: 524px;
    height: 72px;

    border-radius: 40px;
    border: 2px solid #fff;

    input {
      width: 100%;
      height: 100%;

      padding: 0 40px;

      border-radius: 40px;
      background-color: transparent;
      border: 0;
      color: #fff;

      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

export const FooterSection = styled.div`
  margin-top: 100px;
  position: relative;

  text-align: center;

  p {
    padding-bottom: 60px;
  }
`;

export const Footer = styled.div`
  display: flex;

  .negative {
    top: -130px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;

    z-index: -1;
  }
`;

export const DivLogoFooter = styled.div`
  border-right: 6px solid #8176af;
  flex: 1;

  img {
    width: 185px;
    height: 187px;
  }
`;

export const DivInfoHydra = styled.div`
  border-right: 6px solid #8176af;
  padding: 0px 60px;
  flex: 1;

  ul {
    font-size: 16px;
    text-transform: uppercase;

    li {
      transition: all 0.3s;

      &:hover {
        scale: 1.1;
      }

      padding: 8px 0px;
      list-style: none;

      a {
        font-style: normal;
        font-weight: 700;
        list-style: none;
        color: #fff;

        text-decoration: none;
      }
    }
  }
`;

export const DivFAQ = styled.div`
  border-right: 6px solid #8176af;
  padding: 0px 60px;
  flex: 1;

  ul {
    font-size: 16px;
    text-transform: uppercase;

    li {
      transition: all 0.3s;

      &:hover {
        scale: 1.1;
      }

      padding: 8px 0px;
      list-style: none;

      a {
        font-style: normal;
        font-weight: 700;
        list-style: none;
        color: #fff;

        text-decoration: none;
      }
    }
  }
`;

export const DivSocial = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px 60px;
  gap: 40px;

  button {
    width: 214px;
    height: 48px;

    border-radius: 40px;
    background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
    border: 0;

    transition: all 0.3s;

    &:hover {
      background: linear-gradient(90deg, #272337 0%, #574c89 100%);
      color: #fff;
    }
  }
`;

export const DividerFooter = styled.div`
  height: 2px;
  width: 100%;
  margin: 70px 0px;

  background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
`;

export const DivIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  text-decoration: none;
  border-radius: 100%;
  background-color: #c0b7e8;
  transition: all 0.3s;

  &:hover {
    background-color: #8176af;
  }
`;
