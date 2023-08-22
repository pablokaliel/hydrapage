import { HeroSection, DivBuild, Build, DivContact, Contact } from "./styles";

import posabsolut1 from "./../../assets/posabsolut1.png";
import posabsolut3 from "./../../assets/posabsolut3.png";
import womanglass from "./../../assets/womanglass.png";
import arrowsmall from "./../../assets/arrow-small-right.svg";
import location from "./../../assets/location.png";
import phonecall from "./../../assets/phone-call.png";
import mail from "./../../assets/mail.png";

function ComponentHeroSection() {
  return (
    <HeroSection>
      <DivBuild>
        <Build>
          <h1>
            <span> Dive</span> Into The Depths Of <span>Virtual Reality</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            necessitatibus cum commodi. Tenetur, itaque magnam enim dicta
            placeat laboriosam accusantium alias harum sunt earum facilis saepe
            ut facere hic vero.
          </p>
          <div>
            <button>BUILD YOUR WORLD</button>
            <img src={arrowsmall} />
          </div>
          <div className="abolut">
            <img src={posabsolut1} />
          </div>
          <div className="abolut">
            <img src={posabsolut3} />
          </div>
          <div className="abolut rotate">
            <img src={posabsolut3} />
          </div>
        </Build>

        <div className="imageWoman">
          <img src={womanglass} />
        </div>
      </DivBuild>

      <DivContact>
        <Contact className="visible">
          <img src={location} />
          <div>
            <h1>Pay us a Visit</h1>
            <p>Union St, Seattle, WA 98101, United States</p>
          </div>
        </Contact>
        <Contact>
          <img src={phonecall} />
          <div>
            <h1>Give Us a Call</h1>
            <p>(110) 1111-1010</p>
          </div>
        </Contact>
        <Contact className="none">
          <img src={mail} />
          <div>
            <h1>Send Us a Message</h1>
            <p>Contact@HydraVTech.com</p>
          </div>
        </Contact>
      </DivContact>
    </HeroSection>
  );
}

export default ComponentHeroSection;
