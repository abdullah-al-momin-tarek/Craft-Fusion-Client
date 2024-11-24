import { Link } from "react-router-dom";
import Button from "../Reusable/Button";

const Banner = () => {
  return (
    <section className="bg-hero min-w-screen min-h-[80vh] hero-overlay bg-no-repeat object-cover bg-cover mb-10">
      <div className="min-w-screen min-h-[80vh] bg-[#000000b3]  flex justify-center items-center p-3">
        <div className="text-center">
          <h4 className="text-white lg:text-8xl font-bold text-4xl mb-10">
            Welcome To Craft-Fusion
          </h4>
          <h1 className="font-bold text-2xl lg:text-4xl  text-white mb-5 ">
            Discover and Showcase Unique Art & Craft Creations
          </h1>
          <p className="text-white text-xl  mb-5 w-1/2 mx-auto">
            Craft-Fusion connects creators and buyers with unique, handcrafted
            art and craft pieces, adding a personal touch to any space.
          </p>

          <Link to="/allProducts"><Button>Explore Products</Button></Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
