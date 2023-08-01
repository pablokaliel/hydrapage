import { TechnologiesSection } from "./styles";

import vive from "./../../assets/vive.svg";
import oculus from "./../../assets/oculus.svg";
import unreal from "./../../assets/unreal.svg";
import unity from "./../../assets/unity.svg";
import arrowsmall from "./../../assets/arrow-small-right.svg";

function ComponentTechnologieSection() {
  return (
    <TechnologiesSection>
      <div className="technologies">
        <h1>TECHNOLOGIES & HARDWARE</h1>
        <p>USED BY HYDRA VR.</p>
        <button>
          <img src={arrowsmall} />
        </button>
      </div>

      <div className="logos">
        <div>
          <img src={unreal} />
        </div>
        <div>
          <img src={unity} />
        </div>
        <div>
          <img src={oculus} />
        </div>
        <div>
          <img src={vive} />
        </div>
      </div>
    </TechnologiesSection>
  );
}

export default ComponentTechnologieSection;
