import { Swiper, SwiperSlide } from 'swiper/react';
import './CardSlider.css'
import 'swiper/css';
import "swiper/css/navigation";
import { Rating } from 'react-simple-star-rating'

import { Autoplay, Navigation } from "swiper";



function CardSlider({courses,heading,description}) {
  
  return (
    <div className="card-slider-container">
        <h1 className='card-slider-heading'>{heading}</h1>
        <p className="card-slider-desc">{description}</p>
        <Swiper className='card-slider'  navigation={true} 
               autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}

              breakpoints={{

                640: {

                  slidesPerView: 1
                },
                768: {

                  slidesPerView: 2
                },
                898: {

                  slidesPerView: 3
                }, 
                998: {

                  slidesPerView: 5
                }

                
              }}

              spaceBetween={10}
              modules={[Autoplay, Navigation]}>
              {courses.map((obj,index)=>
                <SwiperSlide key={index}>
                  <div className="card">
                    <div className="card-header">
                      <img src={obj.img} alt={obj.alt} />
                    </div>
                    <div className="card-body">
                      <p className="card-title">{obj.title}</p>
                      <p className="instructor">{obj.instructor}</p>
                      <div className="rating-sold-col">
                        <div className="ratings">
                          <p className="rating">({obj.rating})</p>
                          <Rating ratingValue={obj.rating/5*100} readonly={true} />
                        </div>
                        <div className="sold">
                          <p className="sold">Sold: {obj.numOfSold}</p>
                        </div>
                        
                      </div>

                      <p className="price">${obj.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )}
      </Swiper>
    </div>
  )
}

export default CardSlider