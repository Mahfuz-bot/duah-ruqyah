import React from "react"
import Header from "./Header"
import MainCard from "./MainCard"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MainContext({ categories }: any) {
  return (
    <div className="flex flex-col p-6 w-full">
      <Header />
      <MainCard categories={categories} />
    </div>
  )
}
