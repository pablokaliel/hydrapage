import { styled } from "styled-components";

export const FooterSection = styled.div`
  margin-top: 100px;
  position: relative;

  text-align: center;

  p {
    padding-bottom: 60px;
  }
`;

export const Logo = styled.img``;

export const Footer = styled.div`
  display: flex;

  .negative {
    top: -130px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

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
