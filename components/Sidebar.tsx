import Image from "next/image"
import {
  Bookmark,
  BookOpen,
  Home,
  Lightbulb,
  MessageCircle,
  PillBottle,
  ViewIcon,
} from "lucide-react"

function Sidebar() {
  return (
    <aside className="w-16 max-h-[30rem] bg-white border-r shadow-md md:flex flex-col my-6 rounded-2xl justify-around hidden">
      {/* <!-- Logo --> */}
      <div className="flex items-center justify-center ">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
      </div>

      <nav className="flex flex-col gap-3">
        <div className="bg-slate-100 rounded-full p-2 mx-4 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center justify-center size-4 text-slate-400"
          >
            <Home />
          </a>
        </div>
        <div className="bg-slate-100 rounded-full p-2 mx-4 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center justify-center size-4 text-slate-400"
          >
            <ViewIcon />
          </a>
        </div>
        <div className="bg-slate-100 rounded-full p-2 mx-4 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center justify-center size-4 text-slate-400"
          >
            <Lightbulb />
          </a>
        </div>
        <div className="bg-slate-100 rounded-full p-2 mx-4 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center justify-center size-4 text-slate-400"
          >
            <Bookmark />
          </a>
        </div>
        <div className="bg-slate-100 rounded-full p-2 mx-4 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center justify-center size-4 text-slate-400"
          >
            <PillBottle />
          </a>
        </div>
        <div className="bg-slate-100 rounded-full p-2 mx-4 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center justify-center size-4 text-slate-400"
          >
            <BookOpen />
          </a>
        </div>
        <div className="bg-slate-100 rounded-full p-2 mx-4 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center justify-center size-4 text-slate-400"
          >
            <MessageCircle />
          </a>
        </div>
      </nav>
      <div className=" flex items-center  justify-center ">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
      </div>
    </aside>
  )
}

export default Sidebar
