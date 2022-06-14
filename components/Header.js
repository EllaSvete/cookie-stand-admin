// import Link from 'next/link';
import { useAuth } from '../contexts/auth';

export default function Header(props) {
  const { user, logout } = useAuth();
  console.log(user)
  if (props.user) {
    return (

      <header className="top-0 p-2 flex justify-between relative inset-x-0 bg-emerald-500">
        <h1 className="text-4xl bg-emerald-500 px-6 py-4">Cookie Stand Admin</h1>
        <div className="items-center pb-2 pt-2 font-medium">
          <p className="bg-emerald-50 text-zinc-600 px-2 py-1 mx-3 my-3 rounded-md">{props.user.username}</p>
          <button className='bg-emerald-50 text-zinc-600 px-2 py-1 mx-3 my-3 rounded-md'>overview</button>
          <button onClick={logout} className='bg-emerald-50 text-zinc-600 px-2 py-1 mx-3 my-3 rounded-md'>Logout</button>
        </div>
      </header>

    )
  }

  else {
    return (
      <header className="top-0 p-2 flex justify-between relative inset-x-0 bg-emerald-500">
        <h1 className="text-4xl bg-emerald-500 px-6 py-4">Cookie Stand Admin</h1>
      </header>
    )
  }
}