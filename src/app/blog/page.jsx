import BlogPage from '@/common/module/Blog/components/BlogPage'
import React from 'react'

export const metadata = {
  title: "Blog - Fusion",
  description: "Fusion SaaS Landing Page",
};


export default function page() {
  return (
    <div className='w-full flex justify-center items-center'>
        <BlogPage />
    </div>
  )
}
