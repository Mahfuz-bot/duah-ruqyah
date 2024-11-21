"use client"
import React, { useState } from "react"
import CategorySidebar from "./CategorySidebar"
import ContentList from "./ContentList"
import type { Category, Dua } from "@/lib/definitions"

interface MainContextProps {
  categories: Category[]
}

export default function MainCard({ categories }: MainContextProps) {
  const [expandedCategoryId, setExpandedCategoryId] = useState<number | null>(
    null
  )
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [displayedDuas, setDisplayedDuas] = useState<Dua[] | null>([])

  // Aggregates all duas in the selected category (from the category and its subcategories)
  const getAllCategoryDuas = (category: Category): Dua[] => {
    const subcategoryDuas = category.subcategories.flatMap(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (sub: { duas: any }) => sub.duas || []
    )
    return [...(category.duas || []), ...subcategoryDuas]
  }

  const handleCategoryClick = (category: Category) => {
    setExpandedCategoryId((prev) =>
      prev === category.cat_id ? null : category.cat_id
    )

    setSelectedCategory(category)
    setSelectedSubcategory(null)
    // Aggregate all duas for the category
    setDisplayedDuas(getAllCategoryDuas(category))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubcategoryClick = (subcategory: any) => {
    setSelectedSubcategory(subcategory)
    setDisplayedDuas(subcategory.duas || [])
  }

  return (
    <main className="flex flex-col lg:flex-row gap-6">
      <CategorySidebar
        categories={categories}
        expandedCategoryId={expandedCategoryId}
        onCategoryClick={handleCategoryClick}
        onSubcategoryClick={handleSubcategoryClick}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
      />
      <ContentList
        title={selectedCategory?.cat_name_en || "Categories"}
        duas={displayedDuas}
      />
    </main>
  )
}
