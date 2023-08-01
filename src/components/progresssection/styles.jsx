import { styled } from "styled-components";

export const ProgressSection = styled.div``;

export const HowBuild = styled.div`
  display: flex;
  gap: 55px;
`;

export const DivProgress = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 100px;

  position: relative;

  .LineBtn {
    position: absolute;
    z-index: -1;
    top: -30px;
    width: 100%;

    img {
      width: 100%;
    }
  }
`;
