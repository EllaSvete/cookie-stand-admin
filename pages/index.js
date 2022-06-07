import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [jsonString, setJson] = useState()

  function CookieStandHandler(event) {
    event.preventDefault();
    var locationData = {}
    locationData["Location"] = event.target.location.value;
    locationData["Min Customers per Hour"] = parseInt(event.target.minCust.value);
    locationData["Max Customers per Hour"] = parseInt(event.target.maxCust.value);
    locationData["Average Cookies per Hour"] = parseInt(event.target.avgCookie.value);
    setJson(locationData);
    event.target.reset();
  }



  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className='flex flex-col items-center bg-emerald-50'>
        <CookieForm onSubmit={CookieStandHandler}/>
        <ReportTable jsonString={jsonString}/>
      </main>
      <Footer copyright='2022' />
    </div>
  )
}

function Header() {
  return (<header className='font-normal text-4xl bg-emerald-500 px-8 py-6 text-black-100 '>
    <h1>Cookie Stand Admin</h1>
  </header>
  )
}

function CookieForm(props) {
  return (

    <form className="flex flex-col w-3/4 mt-9 mb-8 items-center bg-emerald-300 pt-2 rounded-md" onSubmit={props.onSubmit}>
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

function ReportTable({ jsonString }) {
  return (
    <div>
      <p className='flex flex-col items-center mb-5'> Report Table Coming Soon...</p>
      <p className='flex flex-col items-center mb-8'> {JSON.stringify(jsonString)}</p>
    </div>
  )
}

function Footer({ copyright }) {
  return (
    <footer className='font-normal text-grey-400 px-5 py-3 bg-emerald-500'>
      <p>&copy;{copyright}</p>
    </footer>
  )
}