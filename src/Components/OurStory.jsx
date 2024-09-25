import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandsHolding, faLeaf ,faShieldCat } from "@fortawesome/free-solid-svg-icons";
import material from './assest/material.webp'


const OurStory = () => {
  return (
<>

<div className="flex flex-col items-center text-center p-10 mb-10">
  <h1 className="text-7xl font-extrabold text-gray-800 mb-4">
    Our Story
  </h1>
  <p className="text-2xl text-cyan-600 w-96">
    Taking a stylish and sustainable footwear  with a focus on creating a positive impact on both the world and the people
  </p> 
</div>



<div className="flex justify-center items-center min-h-screen">
  <iframe
    width="1200"
    height="815"
    src="https://www.youtube.com/embed/XHOmBV4js_E"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="rounded-lg shadow-lg"
  ></iframe>
</div>


<div className="flex flex-row space-y-8 p-8">
  <div className="text-center">
    <h2 className="text-xl font-semibold text-gray-700 mt-10">   
    <FontAwesomeIcon icon={faHandsHolding} className='mr-3' />
      Ethics and Equality</h2>
    <p className="text-base text-gray-600">
      Pellentesque quam convallis massa enim, faucibus ornare sollicitudin gravida justo sit suspendisse pellentesque.
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-xl font-semibold text-gray-700 mb-2"> 
    <FontAwesomeIcon icon={faLeaf} className='mr-3' />
      Eco-design</h2>
    <p className="text-base text-gray-600">
      Risus leo molestie a aliquam amet urna orci nisl dignissim elementum nibh felis ultrices vitae consectetur.
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-xl font-semibold text-gray-700 mb-2">
    <FontAwesomeIcon icon={faShieldCat} className='mr-3'  />
      Wildlife Preservation</h2>
    <p className="text-base text-gray-600">
      Pellentesque nunc ante augue adipiscing sed suspendisse amet sed pellentesque convallis erat nibh vivam.
    </p>
  </div>
</div>



<div className='backdrop-blur-sm flex flex-row '>

<div className="p-8 space-y-12">
  {/* Mission Section */}
  <div className="bg-zinc-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-cyan-700 mb-4">Mission</h2>
    <p className="text-base text-cyan-600">
      Pulvinar sed nunc ultrices consequat adipiscing sagittis feugiat at dui, arcu nec id non pellentesque dolor feugiat dolor ac ac sem semper nulla dis vitae, quis elit odio nunc dignissim aliquam ipsum.
    </p>
    <p className="text-base text-cyan-600 mt-4">
      Mattis pretium nec tellus viverra phasellus sed tortor ac tincidunt adipiscing nibh eget, adipiscing sit penatibus lobortis placerat.
    </p>
  </div>

  {/* Vision Section */}
  <div className="bg-zinc-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-cyan-700 mb-4">Vision</h2>
    <p className="text-base text-cyan-600">
      Sit etiam est, nunc sollicitudin malesuada tincidunt senectus venenatis, adipiscing nulla vel diam, lorem donec sit blandit nec tortor, diam cras ut velit nulla purus ullamcorper ornare elit bibendum augue.
    </p>
  </div>
</div>


</div>

<div className='mt-5'>
  <div className='p-5 mt-5'>
    <h1 className='text-center text-6xl text-cyan-400 p-5'>See how your shoes are made</h1>
     <p className='text-center text-zinc-400'>
      Urna, felis enim orci accumsan urna blandit egestas mattis egestas feugiat viverra ornare donec adipiscing semper aliquet integer risus leo volutpat nulla enim ultrices</p>  
  </div>
  <img className='w-screen' src={material} alt="img" />
</div>


<nav className="bg-slate-300 p-4 h-80">
      <div className="flex justify-around items-center p-4 mt-5">
        <div>
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg"
            alt="Badge 3"
            className="h-24 w-24"
          />
        </div>
        <div>
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg"
            alt="Badge 2"
            className="h-24 w-24"
          />
        </div>
        <div>
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg"
            alt="Badge 1"
            className="h-24 w-24"
          />
        </div>
      </div>
      <div className='text-center p-5 mt-12'>
        <h1>Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam sapien pulvinar laoreet vulputate sem aliquet phasellus egestas felis, est, vulputate morbi massa mauris vestibulum dui odio.</h1>
      </div>
    </nav>




</>
  )
}

export default OurStory