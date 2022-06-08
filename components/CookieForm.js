import { useState } from 'react'

export default function CookieForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
    var locationDetails = {}
    locationDetails["Location"] = event.target.location.value;
    locationDetails["Min Customers per Hour"] = parseInt(event.target.minCust.value);
    locationDetails["Max Customers per Hour"] = parseInt(event.target.maxCust.value);
    locationDetails["Average Cookies per Hour"] = parseInt(event.target.avgCookie.value);
    props.inputHandler(locationDetails);
    event.target.reset();
  }

  // flex flex-col w-3/4 mt-9 mb-8 items-center bg-emerald-300 pt-2 rounded-md
  return (

    <form className="w-full max-w-screen-lg bg-emerald-300 rounded-md px-5 py-3 my-10" onSubmit={handleSubmit}>
      <h1 className='text-2xl mb-5 mt-3'>Create Cookie Stand</h1>

      <div className='w-full px-4 mb-5'>
        <div className='flex flex-wrap'>

          <label htmlFor='location'>Location</label>
          <input className='w-full' id='location' type='text' placeholder='Enter a location...' required />

        </div>
      </div>

      <div className='flex flex-wrap w-full mb-3'>
        <div className='w-full md:w-1/4 px-3 mb-6 mb:mb-0'>
          <label className='block text-center tracking-wide mb-2' htmlFor='minCust'>Min Customer per Hour</label>
          <input className='w-full' id='minCust' type='number' required />
        </div>
        <div className='w-full md:w-1/4 px-3 mb-6 mb:mb-0'>
          <label className='block text-center tracking-wide mb-2' htmlFor='maxCust'>Max Customer per Hour</label>
          <input className='w-full' id='maxCust' type='number' required />
        </div>
        <div className='w-full md:w-1/4 px-3 mb-6 mb:mb-0'>
          <label className='block text-center tracking-wide mb-2' htmlFor='avgCookie'>Average Cookies per Hour</label>
          <input className='w-full' id='avgCookie' type='float' required />
        </div>
        <div className='h-100 w-full md:w-1/4'>

          <button type='submit' className="h-full block w-full bg-emerald-500">Create</button>

        </div>
      </div>
    </form>

  )
}