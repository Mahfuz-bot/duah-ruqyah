import { ArrowDown, Search, User } from "lucide-react"
import React from "react"

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6 w-full">
      <h1 className="text-2xl font-semibold text-gray-800">Duas Page</h1>

      <div className="lg:relative lg:block hidden">
        <input
          type="text"
          placeholder="Search by Dua Name"
          className="px-4 py-2 w-80 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-slate-200 p-2 rounded-full size-7 flex items-center">
          <Search />
        </button>
      </div>
      <div className="lg:hidden flex items-center ">
        <span className="bg-slate-200 p-2 rounded-full ">
          <User />
        </span>
        <ArrowDown className="text-slate-600" />
      </div>
    </div>
  )
}
