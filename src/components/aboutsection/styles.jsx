import { styled } from "styled-components";

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
