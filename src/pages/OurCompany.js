import HeroAlternate from "../components/HeroAlternate/HeroAlternate";
import Cities from "../components/Cities/Cities";
import Abilities from "../components/Abilities/Abilities";
import TalentImgD from "../images/about/desktop/image-world-class-talent.jpg";
import TalentImgT from "../images/about/tablet/image-world-class-talent.jpg";
import TalentImgM from "../images/about/mobile/image-world-class-talent.jpg";
import DealImgD from "../images/about/desktop/image-real-deal.jpg";
import DealImgT from "../images/about/tablet/image-real-deal.jpg";
import DealImgM from "../images/about/mobile/image-real-deal.jpg";

const OurCompany = () => {
  const talentData = {
    heading: "World-class talent",
    paragraphOne:
      "We are a crew of strategists, problem-solvers, and technologists.        Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
    paragraphTwo:
      "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
  };

  const dealData = {
    heading: "The real deal",
    paragraphOne:
      "As strategic partners in our clients’ businesses, we are ready to take on    any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
    paragraphTwo:
      "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
  };
  return (
    <>
      <HeroAlternate />
      <Abilities
        first
        imgD={TalentImgD}
        imgT={TalentImgT}
        imgM={TalentImgM}
        heading={talentData.heading}
        paragraphOne={talentData.paragraphOne}
        paragraphTwo={talentData.paragraphTwo}
      />
      <Cities />
      <Abilities
        imgD={DealImgD}
        imgT={DealImgT}
        imgM={DealImgM}
        heading={dealData.heading}
        paragraphOne={dealData.paragraphOne}
        paragraphTwo={dealData.paragraphTwo}
      />
    </>
  );
};

export default OurCompany;
