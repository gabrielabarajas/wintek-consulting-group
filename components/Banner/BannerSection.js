import React from 'react'
import styles from './BannerSection.module.css'
import Image from 'next/image'
import bannerImage from '../../public/images/Bannervideo2.svg';


function BannerSection() {
  return (
    <Image src={bannerImage}/>
  )
}

export default BannerSection