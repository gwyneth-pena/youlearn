import React from 'react'
import Banner from '../Banner'
import Grids from '../Grids'
import { BannerObjAbout } from './AboutPageData'
import Footer from '../Footer'
import ScrollUp from '../../extras/ScrollUp'
import GridsPics from '../GridsPics'

function AboutUsPage() {
  return (
    <>
        <Banner {...BannerObjAbout}/>
        <Grids/>
        <ScrollUp/>
        <GridsPics/>
        <Footer/>
    </>
  )
}

export default AboutUsPage