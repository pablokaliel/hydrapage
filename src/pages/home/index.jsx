import {
  Container,
  Swapper,
  Header,
  DivLogo,
  DivUl,
  DivButtons,
  HeroSection,
  DivBuild,
  Build,
  DivContact,
  Contact,
  AboutSection,
  Right,
  Left,
  DivIntroduction,
  DivImage,
  DivWhy,
  RightAbout,
  CardSection,
  Card,
  ImgCard,
  Divider,
  TechnologiesSection,
  ProgressSection,
  HowBuild,
  DivProgress,
  BtnProgress,
  FormSection,
  DividerForm,
  Form,
  DivForm,
  DivName,
  DivInfo,
  FooterSection,
  Footer,
  DivLogoFooter,
  DivInfoHydra,
  DivFAQ,
  DivSocial,
  DividerFooter,
  DivIcons,
  Icon,
} from "./styles";

import vectorfooter from "./../../assets/vectorfooter.png";
import posabsolut1 from "./../../assets/posabsolut1.png";
import posabsolut3 from "./../../assets/posabsolut3.png";
import name from "./../../assets/name.png";
import logo from "./../../assets/logo.png";
import menglass from "./../../assets/menglass.png";
import womanglass from "./../../assets/womanglass.png";
import linebuttons from "./../../assets/linebuttons.png";
import location from "./../../assets/location.png";
import phonecall from "./../../assets/phone-call.png";
import mail from "./../../assets/mail.png";
import unity from "./../../assets/unity.svg";
import arrowbig from "./../../assets/arrow-big-right.svg";
import arrowsmall from "./../../assets/arrow-small-right.svg";

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  PinterestLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

function Home() {
  return (
    <Container>
      <Swapper>
        <Header>
          <DivLogo>
            <img src={logo} />
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

        <HeroSection>
          <DivBuild>
            <Build>
              <h1>
                <span> Dive</span> Into The Depths Of{" "}
                <span>Virtual Reality</span>
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident necessitatibus cum commodi. Tenetur, itaque magnam
                enim dicta placeat laboriosam accusantium alias harum sunt earum
                facilis saepe ut facere hic vero.
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
            <Contact>
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

        <AboutSection>
          <Left>
            <DivIntroduction>
              <div>
                <h1>Introduction</h1>
                <span>TO HYDRA VR</span>
              </div>
              <img src={arrowbig} />
            </DivIntroduction>
            <DivImage>
              <img src={menglass} />
            </DivImage>
            <DivWhy>
              <div>
                <h1>Introduction</h1>
                <span>TO HYDRA VR</span>
              </div>
              <img src={arrowbig} />
            </DivWhy>
          </Left>
          <Right>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              nemo consectetur minus nisi, quo sed hic blanditiis corporis odio
              amet, veritatis excepturi, vitae ad corrupti? Iste possimus quas
              perferendis unde! Laboriosam, perferendis. Molestias id quos esse
              cupiditate, libero beatae, laudantium eaque optio blanditiis odio
              eos quasi quidem nulla inventore atque reprehenderit corrupti,
              totam sunt. Dolore a quidem voluptates repellat quo. Architecto,
              hic repellat tenetur vero maxime incidunt consequatur esse.
            </span>

            <RightAbout>
              <div>
                <h1>ABOUT</h1>
                <p>HYDRA VR</p>
              </div>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                exercitationem dicta beatae! Placeat distinctio, ipsa molestiae
                esse perferendis totam exercitationem reprehenderit aspernatur,
                laboriosam alias vero saepe maiores non vel consequuntur. Iure
                quae, quos esse numquam dolores illo sapiente dolor ipsam
                quibusdam quo voluptates? Doloribus, ad? Nostrum debitis
                voluptatem recusandae reiciendis facilis molestias sunt rem sit!
                Iure ex architecto quod sed. Voluptatem omnis, neque itaque
                vitae, possimus ipsum in magni ad aut cumque, quos minus
                perspiciatis dolore quidem numquam ab quo deleniti modi
                necessitatibus eaque deserunt nam. Asperiores quia placeat a.
                Corporis, nostrum, molestias libero vel fugit sit maiores harum
                praesentium quis quos suscipit perspiciatis enim sunt, error
                minima eligendi unde officiis placeat. Quis est ad quas
                consequuntur libero nemo consectetur! Libero cum earum
                temporibus minus corrupti, tenetur nihil autem optio quibusdam,
                nam ratione in adipisci commodi? Sunt, reprehenderit tenetur
                praesentium necessitatibus deleniti molestias aspernatur aut
                accusantium totam repellat vel incidunt. Voluptatibus
                perferendis quidem aliquam at temporibus consectetur pariatur
                quaerat. Rem, tenetur officia! Blanditiis commodi autem dolorem,
                alias ducimus dolorum expedita recusandae laborum quam excepturi
                explicabo, aliquam rem aperiam saepe neque. Obcaecati excepturi
                facilis nihil possimus tempora, laborum deleniti consectetur
                praesentium consequatur beatae ratione minima ab voluptatum illo
                nulla, eveniet maxime voluptatibus aliquam nisi, a error? Amet
                repudiandae voluptatem ullam laboriosam. Laudantium ut sequi
                dolor. Ducimus aperiam libero culpa reprehenderit id officia
                reiciendis ex sunt illo est quia mollitia cupiditate vitae,
                itaque deserunt quas explicabo praesentium temporibus
                voluptates. Nesciunt, quo quod!
              </span>
              <button>LETS GETH TOUCH</button>
            </RightAbout>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem veritatis laborum commodi facilis molestias tenetur
              aliquam illo unde, beatae aliquid quia, rerum tempore deleniti
              repellendus eaque inventore non! Ipsa, pariatur? Cumque veniam
              odit perferendis dolor quos dignissimos unde adipisci labore,
              architecto commodi aliquam asperiores vero in omnis laborum alias.
              Quo rem et quisquam consectetur dignissimos dolore pariatur
              similique saepe natus. Aliquam iure ipsum nesciunt qui, aperiam,
              error natus soluta aliquid impedit autem dolore, excepturi quo hic
              suscipit accusamus commodi possimus obcaecati consectetur quasi
              itaque repellat earum deleniti delectus. Quia, inventore!
            </span>
          </Right>
        </AboutSection>

        <CardSection>
          <Card>
            <ImgCard>
              <img src={womanglass} />
            </ImgCard>
            <h1>SIMULATION</h1>
            <Divider />
            <span>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </span>
            <button>TRY IT NOW</button>
          </Card>
          <Card>
            <ImgCard>
              <img src={womanglass} />
            </ImgCard>
            <h1>EDUCATION</h1>
            <Divider />
            <span>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </span>
            <button>TRY IT NOW</button>
          </Card>
          <Card>
            <ImgCard>
              <img src={womanglass} />
            </ImgCard>
            <h1>SELF-CARE</h1>
            <Divider />
            <span>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </span>
            <button>TRY IT NOW</button>
          </Card>
          <Card>
            <ImgCard>
              <img src={womanglass} />
            </ImgCard>
            <h1>OUTDOOR</h1>
            <Divider />
            <span>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </span>
            <button>TRY IT NOW</button>
          </Card>
        </CardSection>

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
              <img src={unity} />
            </div>
            <div>
              <img src={unity} />
            </div>
            <div>
              <img src={unity} />
            </div>
            <div>
              <img src={unity} />
            </div>
          </div>
        </TechnologiesSection>

        <ProgressSection>
          <HowBuild>
            <div>
              <h1>Introduction</h1>
              <span>TO HYDRA VR</span>
            </div>
            <img src={arrowbig} />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              vitae distinctio nesciunt dignissimos voluptates molestias amet
              accusantium ratione esse dicta odio aliquam fugit iusto
              repudiandae, impedit ex ipsa. Accusamus, nisi. Quas vitae
              molestiae hic dignissimos consectetur? Quidem ab unde iusto
              excepturi provident nostrum sit deserunt doloribus quo aliquid?
              Velit praesentium veritatis corrupti quidem ut aspernatur repellat
              neque sed fugit dolorem? Dignissimos nostrum animi quidem amet
              similique alias sed, cum, rem adipisci blanditiis corporis quia
              commodi nobis porro voluptatem perferendis totam reprehenderit
              laboriosam eius fugiat esse distinctio id perspiciatis rerum?
              Dignissimos. Tempore, qui voluptate.
            </span>
          </HowBuild>

          <DivProgress>
            <div className="LineBtn">
              <img src={linebuttons} />
            </div>
            <BtnProgress>
              <button>01</button>
              <div>
                <img src={arrowsmall} />
                <span>3D Conception & Design</span>
              </div>
            </BtnProgress>
            <BtnProgress>
              <button>02</button>
              <div>
                <img src={arrowsmall} />
                <span>Interaction Design</span>
              </div>
            </BtnProgress>
            <BtnProgress>
              <button>03</button>
              <div>
                <img src={arrowsmall} />
                <span>VR World User Testing</span>
              </div>
            </BtnProgress>
            <BtnProgress>
              <button>04</button>
              <div>
                <img src={arrowsmall} />
                <span>Hydra VR Deploy</span>
              </div>
            </BtnProgress>
          </DivProgress>
        </ProgressSection>

        <FormSection>
          <DivForm>
            <h1>JOIN HYDRA</h1>
            <DividerForm />
            <span>Let's Build Your VR Experience</span>

            <Form>
              <DivName>
                <div>
                  <input placeholder="First Name" />
                </div>
                <div>
                  <input placeholder="Last Name" />
                </div>
              </DivName>
              <DivInfo>
                <div>
                  <input placeholder="Email" />
                </div>
                <div>
                  <input placeholder="Phone Number" />
                </div>
              </DivInfo>
              <div className="inputs">
                <input placeholder="Subject" />
                <input placeholder="Tell Us Something..." />
              </div>
            </Form>
            <button>Send to Hydra</button>
          </DivForm>
        </FormSection>

        <FooterSection>
          <Footer>
            <img className="negative" src={vectorfooter} />
            <img src={vectorfooter} />
            <DivLogoFooter>
              <a href="#">
                <img src={logo} />
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
          <p>
            2023 © HYDRA LANDING PAGE - BY PABLOKALYELL. - ALL RIGHTS RESERVED{" "}
          </p>
        </FooterSection>
      </Swapper>
    </Container>
  );
}

export default Home;
