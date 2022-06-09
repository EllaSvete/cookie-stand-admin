// import Link from 'next/link';

// export default function Header() {
//   return (
//   <>
//   <header className='className="top-0 relative inset-x-0 top-0 flex justify-between p-2 bg-emerald-500"'>
//     <h1 className="text-4xl bg-emerald-500 px-6 py-4">Cookie Stand Admin</h1>
//     <div className="items-center pb-2 font-medium">
//       <Link href="/overview">
//         <button className="bg-emerald-500 text-zinc-600 px-4 py-1 font-medium mx-3 my-3">Overview</button>
//       </Link>
//     </div>
//   </header>
//   </>
    
//   );
// }

import Link from 'next/link';

export default function Header(){
  return ( 
    <>
    <header className="top-0 p-2 flex justify-between relative inset-x-0 bg-emerald-500">
      <h1 className="text-4xl bg-emerald-500 px-6 py-4">Cookie Stand Admin</h1>
      <div className="items-center pb-2 pt-2 font-medium">
      <Link href="/overview">
        <button className='bg-emerald-50 text-zinc-600 px-2 py-1 mx-3 my-3 rounded-md'>Overview</button>
      </Link>
      </div>
    </header>
    </>
    )
}