import { ArrowDown, Languages, Settings, Text, User, View } from "lucide-react"
import React, { ForwardRefExoticComponent, RefAttributes } from "react"
import { LucideProps } from "lucide-react"

interface IconProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
  value: string
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, value }) => {
  return (
    <li className="flex items-center bg-slate-100 p-4 rounded-lg text-slate-500 mb-2">
      <span className="bg-slate-200 p-2 rounded-full">
        <IconComponent className="w-5 h-5" />
      </span>
      <span className="ml-4 text-sm">{value}</span>
    </li>
  )
}

export default function RightSidebar() {
  return (
    <div className=" lg:flex-col lg:gap-6 hidden lg:flex lg:max-h-[39rem]">
      <div className="flex items-center self-end mt-6">
        <span className="bg-slate-200 p-2 rounded-full ">
          <User />
        </span>
        <ArrowDown className="text-slate-600" />
      </div>
      <aside className="hidden lg:w-full lg:block h-screen bg-white border rounded-2xl shadow-md p-4 ">
        <h2 className="text-lg font-medium text-center mb-4">Settings</h2>
        <ul className="space-y-4 text-slate-500 ">
          <Icon icon={Languages} value="Language Settings" />
          <Icon icon={Settings} value="General Settings" />
          <Icon icon={Text} value="Font Settings" />
          <Icon icon={View} value="Appearance Settings" />
        </ul>
      </aside>
    </div>
  )
}
