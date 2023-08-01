import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const RotatingImage = styled.img`
  animation: ${rotateAnimation} 2s linear infinite;
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
