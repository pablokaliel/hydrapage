import name from "../../assets/name.png";
import logo from "../../assets/logo.png";

import { Header, DivLogo, DivUl, DivButtons, RotatingImage } from "./styles";

function ComponentHeader() {
  return (
    <Header>
      <DivLogo>
        <RotatingImage src={logo} alt="Logo" />
        <img src={name} />
      </DivLogo>
      <DivUl>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">services</a>
        </li>
        <li>
          <a href="#">technologies</a>
        </li>
        <li>
          <a href="#">how to</a>
        </li>
      </DivUl>
      <DivButtons>
        <button>CONTACT US</button>
        <button>JOIN HYDRA</button>
      </DivButtons>
    </Header>
  );
}

export default ComponentHeader;
