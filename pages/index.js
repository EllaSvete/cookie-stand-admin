import Head from 'next/head';
import Header from '../components/Header';
import CookieForm from '../components/CookieForm';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import { useState } from 'react';

export default function Home() {

  const [storeData, setStoreData] = useState([])

  function inputHandler(data) {
    setStoreData([...storeData, data]);
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className='flex flex-col items-center bg-emerald-50'>
        <CookieForm inputHandler={inputHandler}/>
        <ReportTable storeData={storeData}/>
      </main>
      <Footer/>
    </div>
  )
}
