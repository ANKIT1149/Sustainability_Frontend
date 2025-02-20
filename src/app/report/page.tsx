"use client"
import React, { useRef } from 'react'
import Navbar from '../components/UploadFile/Navbar'
import Waste_Banner from '../components/Reportwaste/Banner';
import EmailNewslater from '../components/UploadFile/Newslater';
import Footer from '../components/UploadFile/Footer/Index';
import Waste_Report from '../components/Reportwaste/Waste_Report';

const ReportWaste = () => {
    const uploadref = useRef<HTMLDivElement>(null)
    const scrollDown = () => {
        if (uploadref.current) {
            uploadref.current.scrollIntoView({behavior: "smooth"})
        }
    }
  return (
    <div className="bg-slate-200">
      <div>
        <Navbar />
      </div>
      <div>
        <Waste_Banner scrollDown={scrollDown} />
      </div>
      <div ref={uploadref}>
        <Waste_Report />
      </div>
      <div>
        <EmailNewslater />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ReportWaste
