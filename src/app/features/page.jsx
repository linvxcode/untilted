import FeaturePage from '@/common/module/Feature/FeaturePage'
import React from 'react'

export const metadata = {
  title: "Features - Fusion",
  description: "Fusion SaaS Landing Page",
};

export default function page() {
  return (
    <div className='w-full flex justify-center items-center'>
        <FeaturePage />
    </div>
  )
}
