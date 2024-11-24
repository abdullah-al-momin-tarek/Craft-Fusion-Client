import { CiDeliveryTruck } from "react-icons/ci";
import { MdHighQuality } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


const WhyUs = () => {
  return (
    <section>
      <h2 className="text-center font-bold text-3xl my-12">WHY US</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-5">
        <div className="flex flex-col justify-center items-center max-w-[500px] bg-[#B2CD7D] dark:bg-gray-800 p-5 rounded-xl space-y-3">
          <TbTruckDelivery className="text-5xl" />
          <h4 className="text-2xl">Fast Delivery</h4>
          <p className="text-center">Receive your handcrafted treasures quickly with our reliable and swift delivery service.</p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-[500px] bg-[#B2CD7D] dark:bg-gray-800 p-5 rounded-xl space-y-3">
          <CiDeliveryTruck className="text-5xl" />
          <h4 className="text-2xl">Free Shipping</h4>
          <p className="text-center">Enjoy free shipping on select items, making your craft shopping even more delightful.</p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-[500px] bg-[#B2CD7D] dark:bg-gray-800 p-5 rounded-xl space-y-3">
          <MdHighQuality className="text-5xl" />
          <h4 className="text-2xl">Best Quality</h4>
          <p className="text-center">We ensure top-notch quality for every unique craft item, straight from skilled artisans.</p>
        </div>

        <div>

          <h4></h4>
          <p> </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
