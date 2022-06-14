import Head from 'next/head';
import { useState } from 'react';
import CookieStandAdmin from '../components/CookieStandAdmin'
import { useAuth } from '../contexts/auth';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

export default function Home() {

  const { user, login, logout } = useAuth();

  // const [userName, setUserName] = useState(false);

  // async function handleLogin(username, password) {
  //   setUserName(username)
  //   login(username, password)
  // }

  // function handleLogout() {
  //   logout()
  //   setUserName(false)
  // }

  return (
    <>
    <Head>
      <title>
        Cookie Stand Admin
      </title>
    </Head>

    { user ? <div><Header user={user}/> <CookieStandAdmin user={user} logout={logout} /> </div>: <LoginForm onLogin={login}/>}
    </>
  )
}
