import Banner from "../Banner"
import CardSlider from "../CardSlider"
import { BannerObjt2, CoursesBestSellerObj, CoursesObj } from "./CoursesData"
import Footer from '../Footer'
import ScrollUp from "../../extras/ScrollUp"

function Courses() {
  
  return (
    <div>
        <Banner {...BannerObjt2}/>
        <CardSlider {...CoursesObj}/>
        <CardSlider {...CoursesBestSellerObj}/>
        <ScrollUp />
        <Footer/>
    </div>  
 
  )

}

export default Courses