import brush from '../../../public/Home/brush.jpg'
import needle from '../../../public/Home/needle.jpg'
import roller from '../../../public/Home/roller.avif'
const Unique = () => {
    return (
        <section className='flex flex-col md:flex-row justify-center mt-10 p-5 gap-5'>
            <div className=''>
                <h2 className='text-3xl font-bold mb-4'>Buy & Sell unique Items Here. </h2>
                <p className='w-auto md:w-[650px] text-sm'>Buy and sell unique, handmade art and craft items! From custom brushes to intricately crafted needles, find or showcase your creative works in our vibrant marketplace.</p>
            </div>
            <div className='flex flex-col ml-0 md:-ml-28'>
                <div className='flex ml-40'> 
                <div className='w-40 rounded-full'>
                    <img className='rounded-t-full bg-white' src={brush} alt="" />
                </div>
                <div className='w-40'>
                    <img src={needle} alt="" />
                </div>
                </div>
                <div className='flex'>
                <div className='w-40'>
                    <img  className='rounded-b-full bg-white' src={brush} alt="" />
                </div>
                <div className='w-40'>
                    <img src={roller} alt="" />
                </div>
                <div className='w-40'>
                    <img  className='rounded-b-full bg-white' src={roller} alt="" />
                </div>
                </div>
            </div>
        </section>
    );
};

export default Unique;