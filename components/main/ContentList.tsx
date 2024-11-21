// ContentList.tsx
import type { Dua } from "@/lib/definitions"
import {
  BookmarkIcon,
  InfoIcon,
  LightbulbIcon,
  LinkIcon,
  Share2Icon,
} from "lucide-react"
import React from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ListItem({ title, content, reference, arabicText, index }: any) {
  return (
    <div className="bg-white border text-black border-slate-200 rounded-lg p-4 mb-4 shadow-sm overflow-y-auto">
      <div className="flex items-center text-green-600 font-semibold">
        <span className="text-xl mr-2">🌟</span>
        <h2 className="text-sm">
          {index}. {title}
        </h2>
      </div>
      <p className="mt-2 text-slate-700 text-sm leading-relaxed">{content}</p>
      {reference && (
        <p className="mt-2 text-green-600 text-sm font-medium">
          Reference: <span className="text-slate-600">{reference}</span>
        </p>
      )}
      {arabicText && (
        <p className="mt-4 text-xl text-right font-arabic  leading-relaxed">
          {arabicText}
        </p>
      )}
      <div className="flex justify-end mt-4 space-x-2 text-slate-500">
        {/* Icons for actions, replace placeholders with actual icons */}
        <button className="p-1 hover:text-green-600">
          <LinkIcon className="size-4" />
        </button>
        <button className="p-1  hover:text-green-600">
          <BookmarkIcon className="size-4" />
        </button>
        <button className="p-1 hover:text-green-600">
          <LightbulbIcon className="size-4" />
        </button>
        <button className="p-1 hover:text-green-600">
          <Share2Icon className="size-4" />
        </button>
        <button className="p-1 hover:text-green-600">
          <InfoIcon className="size-4" />
        </button>
      </div>
    </div>
  )
}

export default function ContentList({
  title,
  duas,
}: {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  duas: any
}) {
  return (
    <div className="w-full h-[33rem] overflow-y-scroll text-black">
      <h1 className="bg-white border border-slate-200 rounded-lg p-4 mb-4 shadow-sm text-xs">
        Section: {title}
      </h1>
      {duas.length > 0 ? (
        duas.map((dua: Dua, index: number) => (
          <ListItem
            key={dua.dua_id}
            index={index + 1}
            title={dua.dua_name_en}
            content={dua.top_en}
            reference={dua.refference_en}
            arabicText={dua.dua_arabic}
          />
        ))
      ) : (
        <p className="text-sm text-slate-500">
          No duas available for this section.
        </p>
      )}
    </div>
  )
}
