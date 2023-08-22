import { FooterSection, Footer, DivLogoFooter, DivInfoHydra, DivFAQ, DivSocial, DividerFooter, DivIcons, Icon, Logo } from "./styles";

import { FacebookLogo, InstagramLogo, LinkedinLogo, PinterestLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";

import vectorfooter from "./../../assets/vectorfooter.png";
import logo from "./../../assets/logo.png";

function ComponentFooterSection() {
  return (
    <FooterSection>
      <Footer>
        <img className="negative" src={vectorfooter} />
        <img src={vectorfooter} />

        <DivLogoFooter>
          <a href="#">
            <Logo src={logo} />
          </a>
        </DivLogoFooter>

        <DivInfoHydra>
          <ul>
            <li>
              <a href="#">about </a>
            </li>
            <li>
              <a href="#">services </a>
            </li>
            <li>
              <a href="#">technologies </a>
            </li>
            <li>
              <a href="#">how to </a>
            </li>
            <li>
              <a href="#">join jydra </a>
            </li>
          </ul>
        </DivInfoHydra>

        <DivFAQ>
          <ul>
            <li>
              <a href="#">F.A.Q</a>
            </li>
            <li>
              <a href="#">sitemap</a>
            </li>
            <li>
              <a href="#">conditions</a>
            </li>
            <li>
              <a href="#">licenses</a>
            </li>
          </ul>
        </DivFAQ>

        <DivSocial>
          <span>Socialize with Hydra</span>
          <DivIcons>
            <Icon href="#">
              <FacebookLogo size={26} color="#302c42" />
            </Icon>
            <Icon href="#">
              <InstagramLogo size={26} color="#302c42" />
            </Icon>
            <Icon href="#">
              <LinkedinLogo size={26} color="#302c42" />
            </Icon>
            <Icon href="#">
              <YoutubeLogo size={26} color="#302c42" />
            </Icon>
            <Icon href="#">
              <TwitterLogo size={26} color="#302c42" />
            </Icon>
            <Icon href="#">
              <PinterestLogo size={26} color="#302c42" />
            </Icon>
          </DivIcons>
          <button>Build you word</button>
        </DivSocial>
      </Footer>
      <DividerFooter />

      <p>2023 © HYDRA LANDING PAGE - BY PABLOKALYELL. - ALL RIGHTS RESERVED </p>
    </FooterSection>
  );
}

export default ComponentFooterSection;
