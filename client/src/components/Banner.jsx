import React from 'react'
import CustomButton from './CustomButton'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HomeHeader from './HomeHeader.jsx';

const Banner = () => {
    return (
        <div className='relative'>
            <div className="fixed left-1/2 -translate-x-1/2 top-4 w-full">
                <HomeHeader />
            </div>
            <div className="bg-home-banner h-screen bg-cover bg-no-repeat bg-center flex items-center">
                <div className="container">
                    <div className="ms-20 w-[400px]">
                        <h4 className='uppercase text-primary text-sm tracking-widest font-semibold'>Who we are</h4>
                        <h1 className='text-5xl font-semibold'>Powerful ideas & sales accelration</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                        <CustomButton to='/' customStyles='!mt-4 !bg-primary !text-white !text-xs !tracking-wider' endIcon={<ArrowRightAltIcon />}>Read More</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner