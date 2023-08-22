import styled from "styled-components";
import bgtechnologies from "../../assets/technologies.png";

export const TechnologiesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  .logos {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 24px;
    width: 100%;

    @media (max-width: 770px) {
      overflow: scroll;
    }
  }

  .technologies {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .parallax-layer {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1278px;
    height: 260px;

    @media (max-width: 770px) {
      width: 100%;
      height: initial;

      text-align: center;
      border-radius: 60px;

      padding: 40px;
    }

    position: relative;
    margin-top: 100px;

    border-radius: 999px;

    background: linear-gradient( 0deg, rgba(48, 44, 66, 0.79) 0%, rgba(48, 44, 66, 0.79) 100% ), url(${bgtechnologies}), lightgray 50% / cover no-repeat;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    h1 {
      font-size: 36px;
      font-style: normal;
      font-weight: 700;

      @media (max-width: 770px) {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }

    p {
      font-size: 36px;
      font-style: normal;
      font-weight: 300;

      @media (max-width: 770px) {
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
      }
    }

    button {
      width: 60px;
      height: 60px;

      @media (max-width: 770px) {
        display: none;
      }

      position: absolute;
      bottom: -27px;

      background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
      box-shadow: 1px 1px 2px 9px rgb(0 0 0 / 48%);

      border-radius: 100%;
      border: 0;

      transition: all 0.3s;

      &:hover {
        background: linear-gradient(90deg, #272337 0%, #574c89 100%);
        color: #fff;
      }
    }
  }
`;
