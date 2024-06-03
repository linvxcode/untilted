






export const PricingItem = [
    {
        plan: 'Free',
        price: '$0',
        yearly: '$0',
        className: 'lg:w-full h-auto bg-[#E8E8E8] rounded-3xl relative lg:left-[100px] ',
        // style: {rotate: -25},
        initial: {
            opacity: 0,
            rotate: 0
        },
        whileInView: {
            opacity:1,
            rotate: -25
        }
    },
    {
        plan: 'Pro',
        price: '$24',
        yearly: '$48',
        className: 'lg:w-full h-auto bg-gradient-to-b from-[#9ccff8] to-[#F4F4F2] relative rounded-3xl z-[9]',
        initial: {
            opacity: 0,
            y: 100
        },
        whileInView: {
            opacity:1,
            y:0
        }
    },
    {
        plan: 'Enterprise',
        price: '$48',
        yearly: '$96',
        className: 'lg:w-full h-auto bg-[#E8E8E8] rounded-3xl relative left-[-100px] ',
        // style: {rotate: 25},
        initial: {
            opacity: 0,
            rotate: 0
        },
        whileInView: {
            opacity:1,
            rotate: 25
        }
    },
]