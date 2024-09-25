const Collection = () => {
  return (
    <section className="p-4 lg:p-8 mt-12">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-md shadow-orange-500 lg:flex-row">
          <img
            src="https://i.ibb.co/0MFf3Kj/landscape-k.jpg"
            alt="Landscape Painting"
            className="h-80 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-[#fff38a] dark:bg-[#6a4f51]">
            <span className="text-xs uppercase">Join, it is free</span>
            <h3 className="text-3xl font-bold">
              Landscape Painting Collection
            </h3>
            <p className="my-6 ">
              Explore our collection of stunning landscape paintings, featuring
              breathtaking mountain views and serene forest scenes.
            </p>
            {/* <button type="button" className="self-start">
                View Collection
              </button> */}
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-md shadow-orange-500 lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/RTph0L1/portrait.jpg"
            alt="Portrait Drawing"
            className="h-80  aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-[#fff38a] dark:bg-[#6a4f51]">
            <span className="text-xs uppercase">Join, it is free</span>
            <h3 className="text-3xl font-bold">Portrait Drawing Selection</h3>
            <p className="my-6 ">
              Discover our range of portrait drawings, including detailed pencil
              sketches and vibrant acrylic portraits.
            </p>
            {/* <button type="button" className="self-start">
                Explore Now
              </button> */}
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-md shadow-orange-500 lg:flex-row">
          <img
            src="https://i.ibb.co/fC5cjst/water-color-paint.webp"
            alt="Watercolour Painting"
            className="h-80  aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-[#fff38a] dark:bg-[#6a4f51]">
            <span className="text-xs uppercase">Join, it is free</span>
            <h3 className="text-3xl font-bold">Watercolour Art Collection</h3>
            <p className="my-6">
              Dive into our selection of vibrant watercolour paintings,
              featuring exquisite floral compositions and captivating animal
              portraits.
            </p>
            {/* <button type="button" className="self-start ">
                Browse Collection
              </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
