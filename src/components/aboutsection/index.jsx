import { AboutSection, Right, Left, DivIntroduction, DivImage, DivWhy, RightAbout } from "./styles";

import menglass from "./../../assets/menglass.png";
import arrowbig from "./../../assets/arrow-big-right.svg";

function ComponentAboutSection() {
  return (
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
          cupiditate, libero beatae, laudantium eaque optio blanditiis odio eos
          quasi quidem nulla inventore atque reprehenderit corrupti, totam sunt.
          Dolore a quidem voluptates repellat quo. Architecto, hic repellat
          tenetur vero maxime incidunt consequatur esse.
        </span>

        <RightAbout>
          <div>
            <h1>ABOUT</h1>
            <p>HYDRA VR</p>
          </div>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            exercitationem dicta beatae! Placeat distinctio, ipsa molestiae esse
            perferendis totam exercitationem reprehenderit aspernatur,
            laboriosam alias vero saepe maiores non vel consequuntur. Iure quae,
            quos esse numquam dolores illo sapiente dolor ipsam quibusdam quo
            voluptates? Doloribus, ad? Nostrum debitis voluptatem recusandae
            reiciendis facilis molestias sunt rem sit! Iure ex architecto quod
            sed. Voluptatem omnis, neque itaque vitae, possimus ipsum in magni
            ad aut cumque, quos minus perspiciatis dolore quidem numquam ab quo
            deleniti modi necessitatibus eaque deserunt nam. Asperiores quia
            placeat a. Corporis, nostrum, molestias libero vel fugit sit maiores
            harum praesentium quis quos suscipit perspiciatis enim sunt, error
            minima eligendi unde officiis placeat. Quis est ad quas consequuntur
            libero nemo consectetur! Libero cum earum temporibus minus corrupti,
            tenetur nihil autem optio quibusdam, nam ratione in adipisci
            commodi? Sunt, reprehenderit tenetur praesentium necessitatibus
            deleniti molestias aspernatur aut accusantium totam repellat vel
            incidunt. Voluptatibus perferendis quidem aliquam at temporibus
            consectetur pariatur quaerat. Rem, tenetur officia! Blanditiis
            commodi autem dolorem, alias ducimus dolorum expedita recusandae
            laborum quam excepturi explicabo, aliquam rem aperiam saepe neque.
            Obcaecati excepturi facilis nihil possimus tempora, laborum deleniti
            consectetur praesentium consequatur beatae ratione minima ab
            voluptatum illo nulla, eveniet maxime voluptatibus aliquam nisi, a
            error? Amet repudiandae voluptatem ullam laboriosam. Laudantium ut
            sequi dolor. Ducimus aperiam libero culpa reprehenderit id officia
            reiciendis ex sunt illo est quia mollitia cupiditate vitae, itaque
            deserunt quas explicabo praesentium temporibus voluptates. Nesciunt,
            quo quod!
          </span>
          
          <button>LETS GETH TOUCH</button>
        </RightAbout>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          veritatis laborum commodi facilis molestias tenetur aliquam illo unde,
          beatae aliquid quia, rerum tempore deleniti repellendus eaque
          inventore non! Ipsa, pariatur? Cumque veniam odit perferendis dolor
          quos dignissimos unde adipisci labore, architecto commodi aliquam
          asperiores vero in omnis laborum alias. Quo rem et quisquam
          consectetur dignissimos dolore pariatur similique saepe natus. Aliquam
          iure ipsum nesciunt qui, aperiam, error natus soluta aliquid impedit
          autem dolore, excepturi quo hic suscipit accusamus commodi possimus
          obcaecati consectetur quasi itaque repellat earum deleniti delectus.
          Quia, inventore!
        </span>
      </Right>
    </AboutSection>
  );
}

export default ComponentAboutSection;
