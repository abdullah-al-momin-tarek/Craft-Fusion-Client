import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <Swiper
    slider-wrapper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}

    breakpoints={{
        // For mobile devices
        640: {
          slidesPerView: 5, 
          spaceBetween: 3,
        },
        // For tablets
        768: {
          slidesPerView: 5, 
          spaceBetween: 5,
        },
        // For desktop and above
        1024: {
          slidesPerView: 6, 
          spaceBetween: 10,
        },
      }}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={6500}
      grabCursor={false} 
      freeMode={true}
      freeModeMomentum={false} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-60' src="https://plus.unsplash.com/premium_photo-1661398674981-18e292c29254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
     
      

    </Swiper>
    );
};

export default Slider;