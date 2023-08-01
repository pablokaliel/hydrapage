import { CardSection } from "./styles";

import outdoor from "./../../assets/outdoor.png";
import selfcare from "./../../assets/selfcare.png";
import simulation from "./../../assets/simulation.png";
import education from "./../../assets/education.png";

import ComponentCard from "./card";

function ComponentCardSection() {
  return (
    <CardSection>
      <ComponentCard
        imgcard={simulation}
        lorem={" Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."}
        title={"SIMULATION"}
      />
      <ComponentCard
        imgcard={education}
        lorem={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odit! Exercitationem, ad maxime natus nemo assumenda aliquid"}
        title={"EDUCATION"}
      />
      <ComponentCard
        imgcard={selfcare}
        lorem={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas esse possimus adipisci laboriosam impedit Aspernatur"}
        title={"SELF-CARE"}
      />
      <ComponentCard
        imgcard={outdoor}
        lorem={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore enim aliquid nisi deserunt repellendus consequuntur, sunt vitae, sapiente vel vero"}
        title={"OUTDOOR"}
      />
    </CardSection>
  );
}

export default ComponentCardSection;
