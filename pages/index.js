import React from 'react'
import {Navbar} from '../components';
import {SubNavbar} from '../components';
import {FeaturedProducts} from '../components';
import {CoffeeCulture} from '../components'
import Footer from '../components/Footer'


const index = () => {

  return (
    <>
      <Navbar/>
      <SubNavbar/>
      <FeaturedProducts/>
      <CoffeeCulture/>
      <Footer/>
    </>
  )
}


export default index