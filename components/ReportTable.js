import { hours } from "../data";

export default function ReportTable({ stands, deleteStand,  }) {

  // function displayTable() {

  //   function hourlyTotalCal() {
  //     let totalAllHours = 0;
  //     let hourlyTotal = []
  //     for (let i = 0; i < hours.length; i++) {
  //       let sumHour = 0;
  //       stands.map(element => {
  //         sumHour += element.hourly_sales[i]
  //       })
  //       hourlyTotal[i] = sumHour
  //     }
  //     totalAllHours = hourlyTotal.reduce((accumulator, currentValue) => accumulator + currentValue)
  //     console.log(totalAllHours)
  //     hourlyTotal[hours.length] = totalAllHours;
  //     console.log(hourlyTotal)
  //     return (hourlyTotal)
  //   }

    return (
      <table className='mb-12 col-span-2 col-start-3 m-2 bg-emerald-500 rounded-lg '>
        <thead className=' text-center border-2 border-emerald-700'>
          <tr className='border-2 border-emerald-600'>
            <th className='text-center font-bold px-5 border-2 border-emerald-600'>Location</th>

            {hours.map((hour, i) => {
              return (<th key={i} className='font-bold px-4 border-2 border-emerald-600'>{hour}</th>)
            }
            )}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody className="border-2 border-emerald-600">
          {stands.map(stand => (
            <CookieStandRow key={stand.id} cookie_stand_info={stand} deleteStand={deleteStand}/>
          ))}
        </tbody>
        {/* <tfoot>
          <tr className='border-2 border-emerald-600'>
            <td className='border-2 border-emerald-600 font-bold px-3 text-center'>
              Totals
            </td>
            {hourlyTotalCal().map(totalTotals => {
              return (
                <td className='border-2 border-emerald-600 px-3 text-center' key={totalTotals}>
                  {totalTotals}
                </td>
              )
            })}
          </tr>
        </tfoot> */}
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
      <tr className='border-emerald-600 border-2 even:bg-emerald-300 odd:bg-emerald-400'>
        <td className=' text-center border-2 border-emerald-600'>{cookie_stand_info.location} <button onClick={clickHandler}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg></button></td>
        {cookie_stand_info.hourly_sales.map((slot, index) => <td className=' text-center border-2 border-emerald-600'key={index}>{slot}</td>)}
        <td className=' text-center border-2 border-emerald-600'> {cookie_stand_info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
      </tr>
    );
  }
  // console.log(cookie_stand_info.hourly_sales)
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