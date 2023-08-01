import { styled } from "styled-components";

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
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
  }

  box-shadow: 1px 1px 5px 21px rgba(14, 14, 14, 0.32);
  border-radius: 999px;
`;

export const Divider = styled.div`
  width: 154px;
  height: 1px;

  background-color: rgba(192, 183, 232, 0.33);
`;
