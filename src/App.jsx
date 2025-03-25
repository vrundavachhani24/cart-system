import { useState } from 'react'
import './App.css'
import Cart from './Component/Cart/cart'
import Header from './Component/Header/Header'

function App() {
  const [toggle, settoggle] = useState(true)

  return (
    <div>
      <Cart />
    </div>

    // <div>
    //   {
    //     toggle && (
    //       <div>
    //         <div>
    //           <div className='flex align justify-between items-center gap-5 m-5 p-3 border-gray-200 max-[476]:align-center max-sm:grid max-sm:top-0 max-sm:absolute max-sm:text-white max-sm:m-0 max-sm:bg-gray-500 max-sm:w-full max-sm:text-center max-sm:fixed'>
    //             <div>
    //               <p className='flex items-center gap-2'>
    //                 <input type="checkbox" />
    //                 Select All</p>
    //             </div>
    //             <div className='flex gap-10 max-sm:grid'>
    //               <p className='flex items-center gap-2 max-sm:mt-4'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    //                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    //               </svg>Search</p>
    //               <p className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
    //                 <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
    //               </svg>Edit</p>
    //               <p className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    //                 <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
    //               </svg>Delete</p>
    //             </div>
    //             <div>
    //               <button className='bg-blue-800 p-3 text-white rounded-3xl flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
    //                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
    //               </svg>Add Product</button>
    //             </div>
    //           </div>
    //         </div>
    //         <button type="btn" onClick={() => { settoggle(!toggle) }} className='max-sm:block hidden p-2 m-3'>
    //           Menu</button>
    //       </div>
    //     )
    //   }
    //   <div className='border-1 border-gray-200 m-5'>
    //     <div className='m-5'>
    //       <div className="grid grid-cols-4 gap-5 mt-10 sm:grid max-sm:grid-cols-1 max-sm:m-10 max-sm:w-90">
    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/Airpods.png" alt="" />
    //           <p className="text-center">Apple Air Pods 2</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>

    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/smartwatch.png" alt="" />
    //           <p className="text-center">Samsung Smart Watch</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>

    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/tv.png" alt="" />
    //           <p className="text-center">Apple Monitor Pro</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>

    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/watch.png" alt="" />
    //           <p className="text-center">Apple Watch Series 4</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='m-5'>
    //       <div className="grid grid-cols-4 gap-5 mt-10 sm:grid max-sm:grid-cols-1 max-sm:grid-cols-1 max-sm:m-10 max-sm:w-90">
    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/Mobile.png" alt="" />
    //           <p className="text-center">Google Pixel 4 XL</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>

    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/spaker.png" alt="" />
    //           <p className="text-center">Amazon Smart Speaker</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>

    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/mackbook.png" alt="" />
    //           <p className="text-center">Apple MacBook Pro 16</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>

    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/ipad.png" alt="" />
    //           <p className="text-center">Apple iPad 10.2</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='m-5'>
    //       <div className="grid grid-cols-4 gap-5 mt-10 sm:grid max-sm:grid-cols-1 max-sm:grid-cols-1 max-sm:m-10 max-sm:w-90">
    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/laptop.png" alt="" />
    //           <p className="text-center">Microsoft Surface Book</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>

    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/nest.png" alt="" />
    //           <p className="text-center">Google Nest</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>

    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/imac.png" alt="" />
    //           <p className="text-center">Apple iMac Pro </p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>

    //         <div className="border-1 border-gray-300 shadow-xl p-5">
    //           <input type="checkbox" />
    //           <img src="/images/ssmartwatch.png" alt="" />
    //           <p className="text-center">Samsung Smart Watch</p>
    //           <p className='text-center mt-3'>$600</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default App
