import { styled } from "styled-components";

export const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 12px;

  margin-top: 100px;
`;
