import AustraliaMapDM from "../../images/locations/desktop/image-map-australia.png";
import CanadaMapDM from "../../images/locations/desktop/image-map-canada.png";
import UkMapDM from "../../images/locations/desktop/image-map-united-kingdom.png";
import AustraliaMapT from "../../images/locations/tablet/image-map-australia.png";
import CanadaMapT from "../../images/locations/tablet/image-map-canada.png";
import UkMapT from "../../images/locations/tablet/image-map-uk.png";
import { ContainerEl } from "../Container/Container";
import {
  OfficesHeading,
  OfficesInnerWrapper,
  OfficesLink,
  OfficesMapColumn,
  OfficesParagraph,
  OfficesSingleOffice,
  OfficesTextColumn,
  OfficesTextColumnInner,
  OfficesWrapper,
} from "./OfficesELements";

const Offices = () => {
  const officesData = [
    {
      id: "canada",
      imgDM: CanadaMapDM,
      imgT: CanadaMapT,
      cityName: "Canada",
      paragraphOne: "Designo Cental Office",
      paragraphTwo: "3886 Wellington Street",
      paragraphThree: "Toronto, Ontario M9C 3J5",
      paragraphFour: "Contact",
      paragraphFive: "+1 253-863-8967",
      paragraphSix: "contact@designo.com",
    },
    {
      id: "australia",
      imgDM: AustraliaMapDM,
      imgT: AustraliaMapT,
      cityName: "Australia",
      paragraphOne: "Designo AU Office",
      paragraphTwo: "19 Balonne Street",
      paragraphThree: "New South Wales 2443",
      paragraphFour: "Contact",
      paragraphFive: "(02) 6720 9092",
      paragraphSix: "contact@designo.au",
    },
    {
      id: "united-kigdom",
      imgDM: UkMapDM,
      imgT: UkMapT,
      cityName: "United Kingdom",
      paragraphOne: "Designo UK Office",
      paragraphTwo: "13 Colorado Way",
      paragraphThree: "Rhyd-y-fro SA8 9GA",
      paragraphFour: "Contact",
      paragraphFive: "078 3115 1400",
      paragraphSix: "contact@designo.uk",
    },
  ];

  return (
    <OfficesWrapper>
      <ContainerEl>
        <OfficesInnerWrapper>
          {officesData.map((office) => {
            return (
              <OfficesSingleOffice key={office.id}>
                <OfficesTextColumn>
                  <OfficesHeading as="h3">{office.cityName}</OfficesHeading>
                  <OfficesTextColumnInner>
                    <OfficesParagraph
                      style={{ fontWeight: "var(--weight-bold)" }}
                    >
                      {office.paragraphOne}
                    </OfficesParagraph>
                    <OfficesParagraph>{office.paragraphTwo}</OfficesParagraph>
                    <OfficesParagraph>{office.paragraphThree}</OfficesParagraph>
                  </OfficesTextColumnInner>
                  <OfficesTextColumnInner>
                    <OfficesParagraph
                      style={{ fontWeight: "var(--weight-bold)" }}
                    >
                      {office.paragraphFour}
                    </OfficesParagraph>
                    <OfficesParagraph>
                      <OfficesLink href="tel:+1 253-863-8967">
                        P : {office.paragraphFive}
                      </OfficesLink>
                    </OfficesParagraph>
                    <OfficesParagraph>
                      <OfficesLink href="mailto:contact@designo.com">
                        M : {office.paragraphSix}
                      </OfficesLink>
                    </OfficesParagraph>
                  </OfficesTextColumnInner>
                </OfficesTextColumn>
                <OfficesMapColumn imgDM={office.imgDM} imgT={office.imgT} />
              </OfficesSingleOffice>
            );
          })}
        </OfficesInnerWrapper>
      </ContainerEl>
    </OfficesWrapper>
  );
};

export default Offices;
