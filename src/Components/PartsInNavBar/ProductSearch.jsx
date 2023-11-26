import React from 'react'

function ProductSearch() {
  return (
    <>
    <div className="productSearch w-[35em] h-8.5 border-2 border-blue-900 rounded-md flex items-center bg-white justify-between px-4">
          <div className="w-full h-full flex">
            <input
              className='border-transparent outline-transparent w-full items-center'
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction min-w-12 h-12 relative flex cursor-pointer bg-blue-900 rounded-r-md">
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"/><path d="M21.65 20.29l-5.84-5.84A7.5 7.5 0 0 0 8 15c-4.14 0-7.5-3.36-7.5-7.5S3.86 0 8 0s7.5 3.36 7.5 7.5c0 1.79-.63 3.43-1.68 4.71l5.84 5.84a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM8 14.5a5.5 5.5 0 1 1 5.5-5.5 5.51 5.51 0 0 1-5.5 5.5z"/>
          </svg>
          </div>
        </div>
    </>
  )
}

export default ProductSearch