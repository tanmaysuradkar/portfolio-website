import React from 'react'
import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="bg-[#ffffff] border-t border-[#e3e3e3] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="w-8 h-8 bg-[#1e1e1e] rounded flex items-center justify-center mb-6">
                <span className="text-[#ffffff] text-sm font-bold">F</span>
              </div>
            </div>

            <div>
              <h4 className="text-[#1e1e1e] font-semibold mb-4">mobile no.</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#757575] hover:text-[#1e1e1e] text-sm"> (+91) 8805145192</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#1e1e1e] font-semibold mb-4">Email address</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#757575] hover:text-[#1e1e1e] text-sm">tanmaysuradkar2008@gmail.com</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#1e1e1e] font-semibold mb-4">github id</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#757575] hover:text-[#1e1e1e] text-sm">tanmaysuradkar</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#1e1e1e] font-semibold mb-4">Instagram id</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#757575] hover:text-[#1e1e1e] text-sm">tanmay_suradkar.26</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer