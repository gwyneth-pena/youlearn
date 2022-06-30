import ScrollUp from '../../extras/ScrollUp'
import Features from '../Features'
import Footer from '../Footer'
import Hero from '../Hero'
import Testimonials from '../Testimonials'
import { FeaturesDataObj, HomeDataHeroObj, HomeDataHeroObj2, TestimonialsData } from './HomeData'

function HomePage() {

  return (
    <>
        <Hero {...HomeDataHeroObj}/>
        <Features {...FeaturesDataObj}/>
        <Hero {...HomeDataHeroObj2}/>
        <Testimonials {...TestimonialsData}/>
        <ScrollUp />
        <Footer/>
    </>
  )
}

export default HomePage