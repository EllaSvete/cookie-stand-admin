// import Head from 'next/head';
import Header from '../components/Header';
import CookieForm from '../components/CookieForm';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import useResource from '../hooks/useResource';
import { useState } from 'react';

export default function CookieStandAdmin({user, logout}) {

  const { resources, deleteResource, createResource } = useResource();

  // const [storeData, setStoreData] = useState([])

  // function inputHandler(data) {
  //   setStoreData([...storeData, data]);
  // }

  return (
    <>
      <Header user={user} logout={logout}/>
      <main className='flex flex-col items-center  bg-emerald-50'>
        <CookieForm createStand={createResource}/>
        <ReportTable stands={resources || []} deleteStand={deleteResource}/>
        {/* <ReportTable storeData={storeData} stands={resources || []} deleteStand={deleteResource}/> */}
      </main>
      {/* <Footer number={storeData.length}/> */}
      <Footer stand_count={resources}/>
    </>
  )
}
