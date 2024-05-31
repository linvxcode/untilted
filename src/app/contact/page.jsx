import ContactPage from '@/common/module/Contact/ContactPage'
import React from 'react'

export const metadata = {
  title: "Contact - Fusion",
  description: "Fusion SaaS Landing Page",
};

export default function page() {
  return (
    <div className='w-full flex justify-center items-center'>
        <ContactPage />
    </div>
  )
}
