import name from "../../assets/name.png";
import hamburgerbutton from "../../assets/hamburgerbutton.png";
import logo from "../../assets/logo.png";

import { Header, DivMobile, DivDesktop, DivLogoDesktop, DivLogoMobile, DivUlDesktop, DivButtonsMobile, DivButtonsDesktop, RotatingImage } from "./styles";
import { useState } from "react";

function ComponentHeader() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Header>
      <DivDesktop>
        <DivLogoDesktop>
          <RotatingImage src={logo} alt="Logo" />
          <img src={name} />
        </DivLogoDesktop>
        <DivUlDesktop>
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
        </DivUlDesktop>
        <DivButtonsDesktop>
          <button>CONTACT US</button>
          <button>JOIN HYDRA</button>
        </DivButtonsDesktop>
      </DivDesktop>

      <DivMobile>
        <DivLogoMobile>
          <RotatingImage src={logo} alt="Logo" />
          <img src={name} />
        </DivLogoMobile>
        <DivButtonsMobile>
          <img src={hamburgerbutton} alt=""   onClick={openModal}/>
        </DivButtonsMobile>
      </DivMobile>

      {isModalOpen && (
        <div className="custom-modal">
          <div className="modal-content">
            <a href="#" onClick={closeModal}>
              About
            </a>
            <a href="#" onClick={closeModal}>
              Services
            </a>
            <a href="#" onClick={closeModal}>
              How it works
            </a>
            <a href="#" onClick={closeModal}>
              Community
            </a>
            <button onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </Header>
  );
}

export default ComponentHeader;
