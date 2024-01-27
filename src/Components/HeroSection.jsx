import React from 'react'
import Img from "../assests/HeroSection/profile.jpg"
import Gradient from "../assests/HeroSection/Gradient.png"
import Button from './Button/Button'

const HeroSection = () => {
    return (
        <div className="bg-[#FFF4EA] w-full flex justify-center items-center lg:justify-evenly pb-10 pt-10 ">

            {/* Left Section */}
            <div className=" flex flex-col justify-center items-center   ">

                <div className="w-[100px] h-[100px] rounded-full">
                    <img src={Img} alt="" className="w-[100px] h-[100px] rounded-full" />
                </div>

                <div className="mt-2 flex flex-col items-center justify-center">
                    <p className="w-[159px] h-[36px] font-inter leading-[36.31px] font-[600] text-2xl text-[#6B6B6B] ">Ranking #1</p>
                    <p className="w-[400px] h-[96px] font-inter leading-[48.41x] font-[600] text-2xl text-[#6B6B6B] mt-3 text-center">XYZ College Of Engineering & Technology, Bhilai CG.</p>
                </div>

                <div className="flex gap-x-5 ">

                    <Button height={"44px"} width={"133px"} bgColor={"#1E1E1E"} txtColor={"white"} data={"Analytics"} radius={"14px"} borderColor={""} className="w-full" />

                    <Button height={"44px"} width={"133px"} bgColor={""} txtColor={"black"} data={"Contact"} radius={"14px"} borderColor={"black"} className="w-full" />


                </div>

            </div>

            {/* Right Section */}
            <div className="  justify-center items-center hidden lg:flex " >
                <img src={Gradient} alt="" className="lg:w-[336.37px] h-[343.49px]" />
            </div>

        </div>
    )
}

export default HeroSection
