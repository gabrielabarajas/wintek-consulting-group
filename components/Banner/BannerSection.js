import React from 'react'
import Image from 'next/image'
import bannerImage from '../../public/images/selected-banner.svg';


function BannerSection() {
  return (
    <Image src={bannerImage}/>
  )
}

export default BannerSection