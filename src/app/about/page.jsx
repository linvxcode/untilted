import AboutPage from '@/common/module/About/AboutPage'
import React from 'react'


export const metadata = {
  title: "About - Fusion",
  description: "Fusion SaaS Landing Page",
};

export default function page() {
  return (
    <div className='w-full flex justify-center items-center'>
        <AboutPage />
    </div>
  )
}
