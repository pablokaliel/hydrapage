import { BtnProgress } from "./styles";
import arrowsmall from "./../../../assets/arrow-small-right.svg";

function ComponentProgress({ number, span }) {
  return (
    <BtnProgress>
      <button>{number}</button>
      <div>
        <img src={arrowsmall} />
        <span>{span}</span>
      </div>
    </BtnProgress>
  );
}

export default ComponentProgress;
