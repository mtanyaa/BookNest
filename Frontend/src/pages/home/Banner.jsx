import React from 'react'
const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
     

      <div className='md:w-1/2 w-full bg-black bg-opacity-40 p-10 rounded-xl shadow-lg backdrop-blur-sm'>
        <h1 className='md:text-5xl text-2xl font-medium mb-7 typing-text'>
          Hey Readers!
        </h1>
        <p className='mb-10'>
          Refresh your bookshelf with this week's hottest new reads! Whether you're into edge-of-your-seat thrillers or soul-stirring memoirs, these latest releases are guaranteed to captivate every kind of reader.
        </p>
        <button className='btn-primary'>Subscribe</button>
      </div>


    </div>
  )
}

export default Banner