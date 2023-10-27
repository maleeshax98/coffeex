// import React, { useState } from 'react'

// export default function Orders() {
//     const [error, setError] = useState(null)
//     const [data, setData] = useState([])
//     // Retrieve the JSON string from localStorage
//     const storedJsonString = localStorage.getItem('ids');

//     if (storedJsonString) {
//         // If the key exists in localStorage, parse the JSON string back to an array of objects
//         const storedArray = JSON.parse(storedJsonString);

//         // You can now use the stored array in your application
//         console.log(storedArray);
//     } else {
//     // Handle the case where the key does not exist in localStorage
//         console.log('Array of objects not found in localStorage');
//         setError("No orders found")
//     }
//   return (
//     <div>
//          <section className='section2 mt-[150px] p-[20px] relative' id="menu">
//                 <div>
//                     <h1 className='text-gray-800 text-2xl font-semibold'>Your order id's</h1>
//                     <hr  className='w-[150px] bg-[#FF902A] h-[5px] rounded-full'/>
//                 </div>
//                 <div>
//                     { error ? (
//                         <div>
//                             <h1 className='text-gray-800 text-2xl font-semibold'>{error }</h1>
                            
//                         </div>
//                     ) : (
//                         <div>
//                         </div>
//                     )}
//                 </div>
//         </section>
//     </div>
//   )
// }
