import { styled } from "styled-components";

export const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
`;

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 30px;
  padding: 100px;

  width: 1275px;

  border-radius: 100px;
  background: radial-gradient(50% 50% at 50% 50%, #403a5f 0%, #211e2e 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

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

export const DividerForm = styled.div`
  width: 414px;
  height: 1px;

  background-color: rgba(192, 183, 232, 0.33);
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;

  .inputs {
    display: flex;
    flex-direction: column;

    gap: 33px;

    input {
      width: 100%;
      height: 72px;

      background: transparent;
      color: #fff;
      padding: 0 40px;

      font-size: 14px;
      font-style: normal;
      font-weight: 400;

      border-radius: 40px;
      border: 2px solid #fff;
    }
  }
`;

export const DivName = styled.div`
  display: flex;

  gap: 12px;

  div {
    width: 524px;
    height: 72px;

    border-radius: 40px;
    border: 2px solid #fff;

    input {
      width: 100%;
      height: 100%;

      padding: 0 40px;

      border-radius: 40px;
      background-color: transparent;
      border: 0;
      color: #fff;

      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

export const DivInfo = styled.div`
  display: flex;
  gap: 12px;

  div {
    width: 524px;
    height: 72px;

    border-radius: 40px;
    border: 2px solid #fff;

    input {
      width: 100%;
      height: 100%;

      padding: 0 40px;

      border-radius: 40px;
      background-color: transparent;
      border: 0;
      color: #fff;

      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;
