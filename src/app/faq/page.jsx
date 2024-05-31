import FaqPage from '@/common/module/Faq/components/FaqPage'
import React from 'react'

export const metadata = {
  title: "Faq - Fusion",
  description: "Fusion SaaS Landing Page",
};

export default function page() {
  return (
    <div className='w-full flex justify-center items-center'>
        <FaqPage/>
    </div>
  )
}
