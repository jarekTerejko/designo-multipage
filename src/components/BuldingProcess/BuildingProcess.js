import { ImageEl } from "../Image/Image";
import {
  BuildingProcessColText,
  BuildingProcessCol,
  BuildingProcessCols,
  BuildingProcessColTitle,
  BuildingProcessWrapper,
  BuildingProcessImgWrapper,
  BuildingProcessTextWrapper,
} from "./BuildingProcessElements";
import PassionateImg from "../../images/home/desktop/illustration-passionate.svg";
import ResourcefulImg from "../../images/home/desktop/illustration-resourceful.svg";
import FriendlyImg from "../../images/home/desktop/illustration-friendly.svg";
import { ContainerEl } from "../Container/Container";
import CircleImg from "../../images/shared/desktop/bg-pattern-small-circle.svg";
import BgPattern from '../../images/shared/desktop/bg-pattern-leaf.svg';

const colsData = [
  {
    img: PassionateImg,
    title: "passionate",
    text:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    img: ResourcefulImg,
    title: "resourceful",
    text:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    img: FriendlyImg,
    title: "friendly",
    text:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

const BuildingProcess = () => {
  return (
    <BuildingProcessWrapper bgPattern={BgPattern} >
      <ContainerEl>
        <BuildingProcessCols>
          {colsData.map((col) => {
            return (
              <BuildingProcessCol key={col.title} >
                <BuildingProcessImgWrapper circleImg={CircleImg}>
                  <ImageEl src={col.img} />
                </BuildingProcessImgWrapper>
                <BuildingProcessTextWrapper>
                  <BuildingProcessColTitle>{col.title}</BuildingProcessColTitle>
                  <BuildingProcessColText>{col.text}</BuildingProcessColText>
                </BuildingProcessTextWrapper>
              </BuildingProcessCol>
            );
          })}
        </BuildingProcessCols>
      </ContainerEl>
    </BuildingProcessWrapper>
  );
};

export default BuildingProcess;
