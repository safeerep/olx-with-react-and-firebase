import React from "react";

function Banner() {
  return (
    <>
      <div className="shadow pt-[4em]">
        <div>
          <div className="flex px-2 py-4">
            <div >
              <span className="ml-4 font-bold">ALL CATEGORIES</span>  
            </div>
            <div>
              <span className="px-2">Cars</span>
              <span className="px-2">Motorcy...</span>
              <span className="px-2">Mobile Ph...</span>
              <span className="px-2">For Sale:Houses & Apart...</span>
              <span className="px-2">Scoot...</span>
              <span className="px-2">Commercial & Other Ve...</span>
              <span className="px-2">For Rent: House & Apart...</span>
            </div>
          </div>
          <div className="banner w-full">
            <img className="w-full object-cover h-96" src="/images/OLX-banner.webp" alt=""/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
