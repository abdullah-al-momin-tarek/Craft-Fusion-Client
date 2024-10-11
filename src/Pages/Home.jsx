import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/react-flicking/dist/flicking.css";
import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";
import Collection from "../Components/Home/Collection";
import Slider from "../Components/Home/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Craft-Fusion | Home</title>
      </Helmet>

      <Banner />
      <Slider/>

      <Collection />
    </div>
  );
};

export default Home;
