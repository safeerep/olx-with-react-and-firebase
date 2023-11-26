import React from 'react'

function Footer() {
  return (
    <>
     <div className="w-full">
      <div className="flex justify-between items-center bg-slate-200 p-4">
        <div>
          <div className="footerheading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footerheading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footerheading">
            <p>Trending Locations</p>
          </div>
          <div className="list">
            <ul>
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footerheading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>OLX Autos Sell Car</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
     
      <div className="flex justify-between items-center p-2 bg-slate-950 text-white">
        <p>Help - Sitemap</p>
        <p>All rights reserved © 2006-2023 OLX</p>
      </div>
    </div>
    </>
  )
}

export default Footer