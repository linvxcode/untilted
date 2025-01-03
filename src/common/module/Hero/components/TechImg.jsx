'use client'
import {  useEffect, useState } from 'react';


import InfiniteLoopSlider from '@/common/component/element/InfiniteLoopSlider';
import { Tech } from '@/common/constant/Tech';
import ComponentTransition from '@/common/component/element/ComponentTransition';

const Tag = ({ icon }) => (
  <div className='flex items-center overflow-hidden  rounded-full py-2 px-5 w-max '>
    {icon}
  </div>
);

const TechImg = () => {
  const [shuffledSkills, setShuffledSkills] = useState([]);
  
  useEffect(() => {
    const skillsArray = Object.entries(Tech);
    const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffledArray);
  }, []);

  const sliders = Array.from({ length: 2 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <InfiniteLoopSlider key={index}>
        {sliderSkills.map(([title, icon], index) => (
          <Tag key={index} icon={icon} title={title} />
        ))}
      </InfiniteLoopSlider>
    );
  });

  return (
    <ComponentTransition className='w-full overflow-hidden'>
      <div className='flex overflow-hidden w-full justify-start items-start'>
        <div className='relative flex flex-row flex-nowrap  justify-center py-2 w-full overflow-hidden'>
          {sliders}
          <div className='w-full inset-0 bg-gradient-to-l from-[#F4F4F2] from-0% to-[#f4f4f200] to-5% absolute'>
          </div>
          <div className='w-full inset-0 bg-gradient-to-r from-[#F4F4F2] from-0% to-[#f4f4f200] to-5% absolute'>
          </div>
        </div>
      </div>
    </ComponentTransition>
  );
};

export default TechImg;
