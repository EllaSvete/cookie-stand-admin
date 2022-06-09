import { hours } from "../data";

export default function ReportTable({ storeData }) {

  function displayTable() {

    return (
      <table className='mb-12 col-span-2 col-start-3 m-2 bg-emerald-500 rounded-lg'>
        <thead>
          <tr>
            <td className='text-center font-bold px-5'>
              Location
            </td>

            {hours.map((hour, i) => {
              return (
                <td key={i} className='font-bold px-4'>
                  {hour}
                </td>
              )
            }
            )}
            <td className="font-bold pr-5">
              Totals
            </td>
          </tr>
        </thead>
        <tbody>
          {storeData.map((store, i) => (
            <tr key={i} className='border-black border-2 even:bg-emerald-300 odd:bg-emerald-400'>
              <td className='flex justify-between'>
                {store.location}
              </td >
              {store.hourlySales.map((cookies, i) => <td className=' text-center border-2 border-black' key={i}> {cookies} </td>)}
              {store.hourlyTotals.map((totals, i) => <td key={i}>{totals}</td>)}
            </tr>
          )
          )}
          <tr>
          </tr>
        </tbody>
        <tfoot>
          <tr className="border-2 border-black">
            <td className="border-2 border-black font-bold text-center">
              Totals
            </td>
          {storeData.map((totalTotals, i) => {
            return (
              <td key={i} className='border-2 border-black'>
              {totalTotals.allTotals}
              </td>
            )
          })}
        </tr>
        </tfoot>
      </table>
    );
  }

  function dataTable() {
    if (storeData.length == 0) {
      return (
        <p>No Cookie Stands Available</p>
      );
    }
    else {
      return displayTable()
    }
  }
  return (
    dataTable()
  )
}










    // <div>
    //   <p className='flex flex-col items-center mb-5'> Report Table Coming Soon...</p>
    //   <p className='flex flex-col items-center mb-8'> {JSON.stringify(storeData)}</p>
    // </div>