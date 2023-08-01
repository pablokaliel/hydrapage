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
