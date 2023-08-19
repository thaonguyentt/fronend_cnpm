import "./css/Banner.css";
// import classes from "./css/StartingPageContent.module.css";
import Carousel from "./Carousel";
import "./css/grid-gallery.css";
import Gallery from "./Gallery";
import OurRoom from "./OurRoom";
import "./css/product-card.css"
import ClassicalItem from "./ClassicalItem";
import "./css/classical.css"

const StartingPageContent = () => {
  return (
    <>
      <Carousel />
      <Gallery />
      <OurRoom />
      <ClassicalItem/>
     
    </>
  );
};

export default StartingPageContent;
