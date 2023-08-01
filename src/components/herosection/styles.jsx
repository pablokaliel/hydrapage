import { styled } from "styled-components";

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
    right: 180px;
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
