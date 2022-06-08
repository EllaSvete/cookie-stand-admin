import { useState } from 'react'

export default function CookieForm(props) {

  const [state, setState] = useState()


  function handleSubmit(event) {
    event.preventDefault();
    var locationDetails = {}
    locationDetails["Location"] = event.target.location.value;
    locationDetails["Min Customers per Hour"] = parseInt(event.target.minCust.value);
    locationDetails["Max Customers per Hour"] = parseInt(event.target.maxCust.value);
    locationDetails["Average Cookies per Hour"] = parseInt(event.target.avgCookie.value);
    setState(locationDetails);
    event.target.reset();
  }


  return (

    <form className="flex flex-col w-3/4 mt-9 mb-8 items-center bg-emerald-300 pt-2 rounded-md" onSubmit={handleSubmit}>
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
          <input className='w-full leading-tight' id='minCust' type='number' required />

          <label className='block text-center tracking-wide mb-2' htmlFor='maxCust'>Max Customer per Hour</label>
          <input className='w-full' id='maxCust' type='number' required />

          <label className='block text-center tracking-wide mb-2' htmlFor='avgCookie'>Average Cookies per Hour</label>
          <input className='w-full' id='avgCookie' type='float' required />

        </div>

        <div className='h-100 w-full md:w-1/4'>

          <button className="px-12 py-4 bg-emerald-500 text-black-100 float-right">Create</button>

        </div>
      </div>
    </form>

  )
}