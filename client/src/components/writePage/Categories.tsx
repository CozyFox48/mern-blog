import UnderlineHeader from "../layouts/UnderlineHeader"
import Category from "./Category"
import { useState } from "react"

export default function Categories() {
  const [categories, setCategories] = useState<string[]>([])

  return (
    <div className="cats mt-12">
      <div className="flex gap-2">
        <UnderlineHeader title="select categories" />
        <span className="text-xl text-gray-500 mt-2">
          (At least one is required)
        </span>
      </div>

      <div className="allCats flex gap-1.5 flex-wrap mt-6">
        <Category
          name="entertainment"
          selectCategory={setCategories}
          categories={categories}
        />
        <Category
          name="health"
          selectCategory={setCategories}
          categories={categories}
        />
        <Category
          name="life style"
          selectCategory={setCategories}
          categories={categories}
        />
        <Category
          name="illustration"
          selectCategory={setCategories}
          categories={categories}
        />
      </div>
    </div>
  )
}
