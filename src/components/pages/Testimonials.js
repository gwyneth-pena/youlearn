import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonials.css'
import 'swiper/css';
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";



function Testimonials({Testimonials,backgroundColor, testimonialBoxColor}) {
  return (
  <div className='outer-testimonial' style={{backgroundColor:backgroundColor}}>
    <div className="testimonials">
       <h1 className="testimonials_heading">Feedback From Users</h1>
       <div className="testimonials_container">
       <Swiper navigation={true} 
               autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}>
       {Testimonials.map(testimonial=>

            <SwiperSlide key={testimonial.name} className='testimonial_slide'>
              <div className="testimonial_col testimonial" style={{backgroundColor:testimonialBoxColor}}>
              <h2 className='testimonial_header'>{testimonial.header}...</h2>
              <p className='testimonial_desc'>
                {testimonial.desc}
              </p>
              <p className="testimonial_name">
                -{testimonial.name}
              </p>
              </div>
              <div className="testimonial_col">
              <img src={testimonial.img} alt={testimonial.alt} className='testimonial_img'/>
              </div>
            </SwiperSlide> 
          )}   
      </Swiper>
       </div>
    </div>
  </div>  
  )
}

export default Testimonials