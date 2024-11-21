import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/react-flicking/dist/flicking.css";
import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";
import Collection from "../Components/Home/Collection";
import Slider from "../Components/Home/Slider";
import Unique from "../Components/Home/Unique";
import ProductsCard from "../Components/Products/ProductsCard";
import Products from "../Components/Products/Products";
import WhyUs from "../Components/Home/WhyUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Craft-Fusion | Home</title>
      </Helmet>

      <Banner />
      <Slider/>

      <Unique/>
      <Products/>

      <WhyUs/>

    </div>
  );
};

export default Home;
