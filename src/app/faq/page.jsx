import FaqPage from '@/common/module/Faq/components/FaqPage'
import React from 'react'

export const metadata = {
  title: "Faq - Untilted",
  description: "Untilted SaaS Landing Page",
};

export default function page() {
  return (
    <div className='w-full flex justify-center items-center'>
        <FaqPage/>
    </div>
  )
}
