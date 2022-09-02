import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import bodrum from '../assets/img/asteria-bodrum.jpg'
import didim from '../assets/img/asteria-didim.jpg'
import asteria from '../assets/img/asteria-kremlin.jpg'
import kemer from '../assets/img/asteria-kemer.jpg'
import didim2 from '../assets/img/asteria-didim2.jpg'
import { Image } from 'react-bootstrap'
import  iconArrow  from '../assets/icons/arrow-right.png'


function Owl() {
  return (
    <div>  
        <div >            
            <OwlCarousel items={5}  
              className="owl-theme"  
              loop  
              nav={false}
              dots={false}
              margin={25} 
              responsive={
                {0:{
                    items:1.7,
                   },
                600:{
                    items:3,
                    },
                1000:{
                    items:5,
                    }}
              }>  
               
               <div className='owl__items'>
                <h3>ASTERIA<br/>BODRUM RESORT</h3>
                <Image className="carousel__img" src= {bodrum} alt='bodrum'/>
                <Image src={iconArrow} className='owl__icon' />
                </div>  
               <div className='owl__items'>
               <h3>ASTERIA<br/>KEMER RESORT</h3>
                <Image  className="carousel__img" src= {didim} alt='asteria didim' />
                <Image src={iconArrow} className='owl__icon' />
                </div>  
               <div className='owl__items'>
               <h3>ASTERIA<br/>KREMLIN PALACE</h3>
                <Image  className="carousel__img" src= {kemer} alt='asteria kemer'/>
                <Image src={iconArrow} className='owl__icon' />
                </div>  
               <div className='owl__items'>
               <h3>ASTERIA<br/>ZEUS DİDİM</h3>
                <Image  className="carousel__img" src= {asteria} alt='asteria kremlin'/>
                <Image src={iconArrow} className='owl__icon' />
                </div>  
               <div className='owl__items'>
               <h3>ASTERIA<br/>VENUS DİDİM</h3>
                <Image className="carousel__img" src= {didim2} alt='asteria didim2'/>
                <Image src={iconArrow} className='owl__icon' />
                </div>  
                 
          </OwlCarousel>  
        </div>  
      
    </div>  
  )
}

export default Owl
