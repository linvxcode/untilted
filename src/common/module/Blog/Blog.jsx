import H1 from '@/common/component/element/H1'
import SectionText from '@/common/component/element/SectionText'
import React from 'react'
import { FaStarOfLife } from 'react-icons/fa'
import BlogCard from './components/BlogCard'
import { BlogItem } from '@/common/constant/BlogItem'

export default function Blog() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 pt-10 w-full">
    <div className="flex w-full  relative justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <SectionText
          title="Blog "
        />
        <H1
          title="Thoughtfully curated design updates, articles, resources, and inspiration delivered weekly."
          className="!text-2xl lg:!text-4xl lg:w-[70%] !text-center"
          textColor="colorShadow"
        />
        <div className="w-full ">
            <BlogCard item={BlogItem} />
        </div>
      </div>
    </div>
  </div>
  )
}
