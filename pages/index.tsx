import MainContext from "@/components/main/MainContext"
import RightSidebar from "@/components/RightSidebar"
import Sidebar from "@/components/Sidebar"
import { fetchData } from "@/lib/fetchData"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ categories }: any) {
  return (
    <div className="flex min-h-screen bg-gray-100 px-6 text-black">
      <Sidebar />
      <MainContext categories={categories} />
      <RightSidebar />
    </div>
  )
}
export async function getStaticProps() {
  const categories = await fetchData()

  return {
    props: { categories },
  }
}
