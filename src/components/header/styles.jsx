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
  width: 100%;

  .custom-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    max-width: 80%;
    width: 200px;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #0d0d0d;

    gap: 12px;
    padding: 20px;

    border-radius: 8px;
  }

  .modal-content a {
    display: block;
    margin: 10px 0;

    text-decoration: none;
    color: #af6bd5;
    font-weight: bold;
  }

  .modal-content button {
    background-color: #333;
    color: white;

    position: absolute;
    top: 3px;
    right: 3px;

    border: none;
    border-radius: 4px;

    padding: 10px 20px;

    cursor: pointer;
  }

  .modal-content button:hover {
    background-color: #555;
  }

  @media (max-width: 770px) {
    padding: 15px;
  }
`;

export const DivLogoDesktop = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;
`;

export const DivLogoMobile = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;
`;

export const DivDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const DivMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media (min-width: 770px) {
    display: none;
  }
`;

export const DivUlDesktop = styled.ul`
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

    transition: all 0.3s;

    &:hover {
      color: #af6bd5;
    }
  }
`;

export const DivButtonsDesktop = styled.div`
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

export const DivButtonsMobile = styled.div`
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
