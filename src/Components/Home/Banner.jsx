import Button from "../Reusable/Button";

const Banner = () => {
  return (
    <section className="bg-hero min-w-screen min-h-[80vh] hero-overlay bg-no-repeat object-cover bg-cover mb-10">
      <div className="min-w-screen min-h-[80vh] bg-[#000000b3]  flex justify-center items-center p-3">
        <div>
          <h4 className="text-white lg:text-3xl text-2xl mb-3">
            Welcome To Craft-Fusion
          </h4>
          <h1 className="font-bold text-3xl lg:text-5xl text-white mb-5">
            Discover and Showcase Unique Art & Craft Creations
          </h1>
          <p className="text-white text-lg max-w-[700px] mb-5">
            Craft-Fusion connects creators and buyers with unique, handcrafted
            art and craft pieces, adding a personal touch to any space.
          </p>

          <Button>Explore Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
