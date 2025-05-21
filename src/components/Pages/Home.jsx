import React from 'react'
import newImage from '../../assets/new.jpg';

const Home = () => {
  return (
    <div>
      <div className='grid gap-2 m-4 sm:grid-cols-2'>
        <div className='rounded shadow-2xl h-[500px] w-full border-1'>
          <img src={newImage} alt="Cool image" className="w-full h-full object-cover" />

        </div>
        <div className='h-[500px] w-full'>
          <h1 className='text-6xl mt-28 font-serif font-thin ml-4'>Nature is not a place to visit.It is Home.</h1>
          <p className='font-serif m-5'>Find peace in the beauty of the world.<br/> Explore more,feel more.</p>
          <button className='ml-5 bg-blue-600 rounded p-2 text-white'>Learn More</button>
          <button className='ml-5 rounded p-2 border'>Contect Us</button>
        </div>
      </div>
    </div>
  )
}

export default Home
