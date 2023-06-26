import React from 'react'
import carusel from "../images/caruseone.png"
import carusel2 from "../images/carusel2.png"

const History = () => {
  return (
    <div className='history fixed  top-0 right-0 left-0 p-20 justify-between pt-28    ' >
        <div className='flex flex-col md:justify-center md:items-center md:mt-5  ' >
      <div className='flex' >
      <div className='flex pt-12 -ml-16   ' >
        <div className=' text-9xl text-gray-500  font-semibold w-min   md:-ml-96  ' >01</div>
       <div>
        <h1 className=" w-min absolute mt-16 font-extrabold -ml-2 text-2xl text-blue-950   " >HISTORY</h1>
        <div className='w-4 h-4 bg-gray-500 mt-24 -ml-2 '  ></div>
        </div>
      </div>
      </div>
      <div className='bg-white  p-4 rounded-xl w-96 -ml-20   mt-4 md:w-1/2   md:ml-28   ' >
      <p className=' text-black ' >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. 
      </p>
      </div>
      <div className='flex  justify-center pb-5   md:mt-52 w-full  bg-opacity-50  bg-blue-950    ' >
      <div className="carousel md:w-1/5   pt-5   ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={carusel} className="w-full" />
    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a  href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={carusel2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={carusel} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full  ">
  <img src={carusel2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default History
