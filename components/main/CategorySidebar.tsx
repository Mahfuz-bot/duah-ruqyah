// "use client"
import React from "react"
import { SearchIcon } from "lucide-react"
import type { Category, SubCategory } from "@/lib/definitions"

interface CategoryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.FC<any>
  title: string
  subcategoryCount: number
  duaCount: number
  onClick: () => void
  isExpanded: boolean
  subcategories: Category["subcategories"]
  onSubcategoryClick: (subcategory: SubCategory) => void
  selectedCategoryId: number | null
  selectedSubcategoryId: number | null
}

const CategoryItem: React.FC<CategoryProps> = ({
  icon: IconComponent,
  title,
  subcategoryCount,
  duaCount,
  onClick,
  isExpanded,
  subcategories,
  onSubcategoryClick,
  selectedSubcategoryId,
}) => {
  return (
    <li className="flex flex-col">
      <div
        onClick={onClick}
        className={`flex items-center p-4 rounded-lg shadow mb-2 cursor-pointer
          ${isExpanded ? "bg-green-100" : "bg-white"}
        `}
      >
        <span className="bg-slate-100 p-2 rounded-full">
          <IconComponent className="w-5 h-5 text-green-500" />
        </span>
        <div className="ml-4 flex-1">
          <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
          <p className="text-xs text-slate-500">
            Subcategories: {subcategoryCount}
          </p>
        </div>
        <div className="text-right">
          <span className="text-sm font-semibold text-slate-700">
            {duaCount}
          </span>
          <p className="text-xs text-slate-500">Duas</p>
        </div>
      </div>

      {/* Subcategories */}
      {isExpanded && (
        <ul className="pl-8 mt-2 relative">
          {subcategories && subcategories.length > 0 ? (
            subcategories.map((subcat: SubCategory, index: number) => (
              <li
                key={subcat.subcat_id}
                onClick={() => onSubcategoryClick(subcat)}
                className={`flex items-center gap-3 py-2 cursor-pointer text-sm relative
                  ${
                    selectedSubcategoryId === subcat.subcat_id
                      ? "text-green-500"
                      : "text-gray-700"
                  }
                `}
              >
                {/* Dot */}
                <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 relative z-10"></div>

                {/* Dotted line */}
                {index < subcategories.length - 1 && (
                  <div className="absolute left-1 top-2 h-full border-l-2 border-dotted border-green-500"></div>
                )}

                {/* Subcategory Name */}
                <span className="flex-1">{subcat.subcat_name_en}</span>
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-500">
              No subcategories available
            </li>
          )}
        </ul>
      )}
    </li>
  )
}

export default function CategorySidebar({
  categories,
  expandedCategoryId,
  onCategoryClick,
  onSubcategoryClick,
  selectedCategory,
  selectedSubcategory,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  return (
    <div className="bg-white rounded-lg shadow-lg lg:w-[27rem] w-full h-[33rem]">
      <h1 className="text-xl font-bold text-center bg-green-500 text-white py-3 rounded-t-lg">
        Categories
      </h1>
      <div className="p-2">
        <div className="flex items-center bg-slate-100 p-2 rounded-lg mb-4">
          <SearchIcon className="w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search Categories"
            className="ml-2 bg-transparent outline-none text-sm text-slate-700 placeholder-slate-500 flex-1"
          />
        </div>
        <ul className="overflow-y-auto max-h-[25rem]">
          {categories.map((category: Category) => (
            <CategoryItem
              key={category.cat_id}
              icon={SearchIcon}
              title={category.cat_name_en}
              subcategoryCount={category.subcategories.length}
              duaCount={category.no_of_dua}
              isExpanded={expandedCategoryId === category.cat_id}
              onClick={() => onCategoryClick(category)}
              subcategories={category.subcategories}
              onSubcategoryClick={onSubcategoryClick}
              selectedCategoryId={selectedCategory?.cat_id}
              selectedSubcategoryId={selectedSubcategory?.subcat_id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
