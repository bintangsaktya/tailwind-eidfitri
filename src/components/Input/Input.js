import React from 'react'

export default function input({label, placeholder}) {
  return (
    <div className="md:mx-auto mx-10 flex justify-start flex-col" >
        <label className="block font-semibold mb-2">{label}</label>
        <input type="text" placeholder={placeholder} className="block border-blue-500 border-b-[0.2rem] focus:border-blue-300 focus:outline-0 w-full md:w-[33rem]" />
    </div>
  )
}
