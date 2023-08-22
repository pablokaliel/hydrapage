import { styled } from "styled-components";

export const ProgressSection = styled.div`
  width: 100%;

  @media (max-width: 770px) {
    overflow-y: scroll;
    padding: 0px 8px;
  }
`;

export const HowBuild = styled.div`
  display: flex;
  gap: 55px;

  @media (max-width: 770px) {
    text-align: center;
    width: 100%;
    span {
      display: none;
    }

    img {
      display: none;
    }
  }
`;

export const DivProgress = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 100px;

  @media (max-width: 770px) {
    gap: 60px;

    display: inline-flex;

    justify-content: center;
    align-items: center;
  }

  position: relative;

  .LineBtn {
    @media (max-width: 770px) {
      display: none;
    }

    position: absolute;
    z-index: -1;
    top: -30px;
    width: 100%;

    img {
      width: 100%;
    }
  }
`;
