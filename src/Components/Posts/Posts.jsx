import React from "react";

function Posts() {
  return (
    <>
      <h2 className="ml-12 mt-4 text-teal-800 text-lg font-bold">
        Fresh recommendations
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-4 mb-2 px-12">

        <div className=" h-60 inline-block cursor-pointer border p-2">
          <div className="flex justify-center items-center">
            <img className="h-32 w-full object-center" src="" alt="" />
          </div>
          <div>
            <p className="mt-2 text-lg font-bold">&#x20B9; 77777</p>
            <span className="text-base">Samsung Phone</span>
            <p className="text-sm">A series - A20</p>
          </div>
          <div className="flex justify-end text-sm">
            <span>25/11/2023</span>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Posts;
