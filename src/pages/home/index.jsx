import { Container, Swapper } from "./styles";

import ComponentHeader from "../../components/header";
import ComponentHeroSection from "../../components/herosection";
import ComponentAboutSection from "../../components/aboutsection";
import ComponentCardSection from "../../components/cardsection";
import ComponentTechnologieSection from "../../components/technologiesection";
import ComponentProgressSection from "../../components/progresssection";
import ComponentFormSection from "../../components/formsection";
import ComponentFooterSection from "../../components/footersection";

function Home() {
  return (
    <Container>
      <Swapper>
        <ComponentHeader />
        <ComponentHeroSection />
        <ComponentAboutSection />
        <ComponentCardSection />
        <ComponentTechnologieSection />
        <ComponentProgressSection />
        <ComponentFormSection />
        <ComponentFooterSection />
      </Swapper>
    </Container>
  );
}

export default Home;
