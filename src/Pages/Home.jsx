
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/react-flicking/dist/flicking.css";
import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Craft-Fusion | Home</title>
      </Helmet>

      <Banner/>
    </div>
  );
};

export default Home;
