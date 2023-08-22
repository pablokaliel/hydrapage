import { TechnologiesSection } from "./styles";
import vive from "./../../assets/vive.svg";
import oculus from "./../../assets/oculus.svg";
import unreal from "./../../assets/unreal.svg";
import unity from "./../../assets/unity.svg";
import arrowdown from "./../../assets/arrow-down.svg";

function ComponentTechnologieSection() {
  return (
    <TechnologiesSection>
      <div className="parallax-layer">
        <div className="technologies">
          <h1>TECHNOLOGIES & HARDWARE</h1>
          <p>USED BY HYDRA VR.</p>
          <button>
            <img src={arrowdown} alt="Arrow Down" />
          </button>
        </div>
      </div>

      <div className="logos">
        <div>
          <img src={unreal} alt="Unreal" />
        </div>
        <div>
          <img src={unity} alt="Unity" />
        </div>
        <div>
          <img src={oculus} alt="Oculus" />
        </div>
        <div>
          <img src={vive} alt="Vive" />
        </div>
      </div>
    </TechnologiesSection>
  );
}

export default ComponentTechnologieSection;
