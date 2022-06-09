import { useState } from 'react'

export default function CookieForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
    var locationDetails = {}
    locationDetails.location = event.target.location.value;
    locationDetails.minCust = parseInt(event.target.minCust.value);
    locationDetails.maxCust = parseInt(event.target.maxCust.value);
    locationDetails.avgCookie = parseInt(event.target.avgCookie.value);
    locationDetails.hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    locationDetails.hourlyTotals = [516]
    locationDetails.allTotals=[]
    props.inputHandler(locationDetails);
    event.target.reset();
  }

  return (

    <form className="w-full py-3 my-10 max-w-screen-lg bg-emerald-300 rounded-md px-5" onSubmit={handleSubmit}>
      <h1 className='flex justify-center text-2xl mb-5 mt-3'>Create Cookie Stand</h1>

      <div className='w-full px-4 mb-5'>
        <div className='flex flex-wrap'>

          <label htmlFor='location'>Location</label>
          <input className='w-full' id='location' type='text' placeholder='Enter a location...' required />

        </div>
      </div>
      {/* space-x2 */}
      <div className='flex space-x-2 flex-wrap w-full mb-3'>

        <div className='w-full md:w-1/4 px-3 mb-6 mb:mb-0 bg-emerald-200 '>
          <label className='block text-center tracking-wide mb-2' htmlFor='minCust'>Min Customer per Hour</label>
          <input className='w-full mb-2' id='minCust' type='number' required />
        </div>

        <div className='w-full md:w-1/4 px-3 mb-6 mb:mb-0 bg-emerald-200'>
          <label className='block text-center tracking-wide mb-2' htmlFor='maxCust'>Max Customer per Hour</label>
          <input className='w-full mb-2' id='maxCust' type='number' required />
        </div>

        <div className='w-full md:w-1/4 px-3 mb-6 mb:mb-0 bg-emerald-200'>
          <label className='block text-center tracking-wide mb-2' htmlFor='avgCookie'>Average Cookies per Hour</label>
          <input className='w-full mb-2' id='avgCookie' type='float' required />
        </div>

        {/* <div className='h-100 w-full md:w-1/4'> */}
          {/* <button type='submit' className="h-full block w-full bg-emerald-500">Create</button> */}
        {/* </div> */}

          <button className="px-16 py-4 m-2 bg-emerald-500">Create</button>
      </div>
    </form>

  )
}

// make hourly sales key and have that be hard coded , put it in the object that is built off od form submission
// [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
