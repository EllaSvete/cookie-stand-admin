import { hours } from "../data";

export default function ReportTable({ stands, deleteStand, cookie_stand_info }) {

  // function displayTable() {

    return (
      <table className='mb-12 col-span-2 col-start-3 m-2 bg-emerald-500 rounded-lg'>
        <thead>
          <tr>
            <th className='text-center font-bold px-5'>Location</th>

            {hours.map((hour, i) => {(<th key={i} className='font-bold px-4'>{hour}</th>)
            }
            )}
            <td className="font-bold pr-5">
              Totals
            </td>
          </tr>
        </thead>
        <tbody>
          {stands.map(stand => (
            <CookieStandRow key={stand.id} cookie_stand_info={stand} deleteStand={deleteStand}/>
          ))}
        </tbody>
        </table>
        
        // <tfoot className="border-2 border-black">
        //   <tr className="border-2 border-black">
        //     <td className="border-2 border-black font-bold text-center">
        //       Totals
        //     </td>
        //   {storeData.map((totalTotals, i) => {
        //     return (
        //       <td key={i} className='border-2 border-black'>
        //       {totalTotals.allTotals}
        //       </td>
        //     )
        //   })}
        // </tr>
        // </tfoot>
    );
  }

  function CookieStandRow({ cookie_stand_info, deleteStand }) {
    function clickHandler() {
      deleteStand(cookie_stand_info.id);
    }
    if (cookie_stand_info.hourly_sales.length == 0) {
      cookie_stand_info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    return (
      <tr>
        <td>{cookie_stand_info.location} <button onClick={clickHandler}>[x]</button></td>
        {cookie_stand_info.hourly_sales.map((slot, index) => <td key={index}>{slot}</td>)}
        <td>{cookie_stand_info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
      </tr>
    );
  }
// }




//   function dataTable() {
//     if (cookie_stand_info.length == 0) {
//       return (
//         <p>No Cookie Stands Available</p>
//       );
//     }
//     else {
//       return displayTable()
//     }
//   }
//   return (
//     dataTable()
//   )
// }



/* <tbody>
          {storeData.map((store, i) => (
            <tr key={i} className='border-black border-2 even:bg-emerald-300 odd:bg-emerald-400'>
              <td className='flex justify-between'>
                {store.location}
              </td >
              {store.hourly_sales.map((cookies, i) => <td className=' text-center border-2 border-black' key={i}> {cookies} </td>)}
              {store.hourlyTotals.map((totals, i) => <td key={i}>{totals}</td>)}
            </tr>
          )
          )}
          <tr>
          </tr>
        // </tbody> */






    // <div>
    //   <p className='flex flex-col items-center mb-5'> Report Table Coming Soon...</p>
    //   <p className='flex flex-col items-center mb-8'> {JSON.stringify(storeData)}</p>
    // </div>