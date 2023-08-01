import { ProgressSection, HowBuild, DivProgress } from "./styles";

import linebuttons from "./../../assets/linebuttons.png";
import arrowbig from "./../../assets/arrow-big-right.svg";

import ComponentProgress from "./progress";

function ComponentProgressSection() {
  return (
    <ProgressSection>
      <HowBuild>
        <div>
          <h1>Introduction</h1>
          <span>TO HYDRA VR</span>
        </div>
        <img src={arrowbig} />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vitae
          distinctio nesciunt dignissimos voluptates molestias amet accusantium
          ratione esse dicta odio aliquam fugit iusto repudiandae, impedit ex
          ipsa. Accusamus, nisi. Quas vitae molestiae hic dignissimos
          consectetur? Quidem ab unde iusto excepturi provident nostrum sit
          deserunt doloribus quo aliquid? Velit praesentium veritatis corrupti
          quidem ut aspernatur repellat neque sed fugit dolorem? Dignissimos
          nostrum animi quidem amet similique alias sed, cum, rem adipisci
          blanditiis corporis quia commodi nobis porro voluptatem perferendis
          totam reprehenderit laboriosam eius fugiat esse distinctio id
          perspiciatis rerum? Dignissimos. Tempore, qui voluptate.
        </span>
      </HowBuild>

      <DivProgress>
        <div className="LineBtn">
          <img src={linebuttons} />
        </div>
        <ComponentProgress number={"01"} span={"3D Conception & design"} />
        <ComponentProgress number={"02"} span={"Interaction Design"} />
        <ComponentProgress number={"03"} span={"VR World User Testing"} />
        <ComponentProgress number={"04"} span={"Hydra VR Deploy"} />
      </DivProgress>
    </ProgressSection>
  );
}

export default ComponentProgressSection;
