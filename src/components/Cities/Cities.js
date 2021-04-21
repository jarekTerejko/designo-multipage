import CircleImg from "../../images/shared/desktop/bg-pattern-small-circle.svg";
import CanadaImg from "../../images/shared/desktop/illustration-canada.svg";
import AustraliaImg from "../../images/shared/desktop/illustration-australia.svg";
import UkImg from "../../images/shared/desktop/illustration-united-kingdom.svg";
import { ContainerEl } from "../Container/Container";
import {
  CitiesInnerWrapper,
  CitiesWrapper,
  CitiesCityName,
  CitiesCityCol,
  CitiesButtonR,
  CitiesCityImgWrapper,
} from "./CitiesElements";
import { ImageEl } from "../Image/Image";

const Cities = () => {
 const colsData = [
    { img: CanadaImg, cityName: "Canada", path: "/locations" },
    { img: AustraliaImg, cityName: "Australia", path: "/locations" },
    { img: UkImg, cityName: "United Kingdom", path: "/locations" },
  ];

  return (
    <CitiesWrapper>
      <ContainerEl>
        <CitiesInnerWrapper>
          {colsData.map((city) => {
            return (
              <CitiesCityCol key={city.cityName} >
                <CitiesCityImgWrapper circleImg={CircleImg}>
                <ImageEl src={city.img} />
                </CitiesCityImgWrapper>
                <CitiesCityName>{city.cityName}</CitiesCityName>
                <CitiesButtonR to={city.path}>See Location</CitiesButtonR>
              </CitiesCityCol>
            );
          })}

          
        </CitiesInnerWrapper>
      </ContainerEl>
    </CitiesWrapper>
  );
};

export default Cities;
