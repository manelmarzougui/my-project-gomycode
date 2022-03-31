import React from 'react'
import './home.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

function Featured() {
  return (
    <Carousel
      arrows={false}
      swipeable={false}
      draggable={false}
      showDots={false}
      autoPlay={true}
      autoPlaySpeed={2000}
      infinite={true}
      transitionDuration={500}
      className='featured'
      responsive={responsive}
    >
      <div className='solide'>
        <Link to='/description'>
          <img className='imagees' src='./image/image1.jpeg' />
        </Link>
        <p>Bagues</p>
        {/* <div className="price">20.000DT</div> */}
      </div>

      <div className='solide'>
        <Link to='/description'>
          <img className='imagees' src='./image/image2.jpg' />
        </Link>
        <p>Collier</p>
        {/* <div className="price">35.500DT</div> */}
      </div>
      <div className='solide'>
        <Link to='/description'>
          <img className='imagees' src='./image/image3.png' />
        </Link>
        <p>Love me</p>
        {/* <div className="price">39.900DT</div> */}
      </div>
      <div className='solide'>
        <Link to='/description'>
          <img className='imagees' src='./image/image4.jpeg' />
        </Link>
        <p>Boucle</p>
        {/* <div className="price">19.500DT</div> */}
      </div>

      <div className='solide'>
        <Link to='/description'>
          <img className='imagees' src='./image/image6.jpeg' />
        </Link>
        <p>Colliers</p>
        {/* <div className="price">32.000DT</div> */}
      </div>
    </Carousel>
  )
}

export default Featured
