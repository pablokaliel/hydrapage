import { styled } from "styled-components";

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
