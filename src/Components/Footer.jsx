import React from 'react'

const Footer = () => {
    return (
        <div className="w-full bg-[#000000] py-5">
            <div className=" text-white font-roboto flex flex-col items-center w-full">
                <div className="flex flex-col items-center  w-[80%]">
                    <p className="">MADE WITH ❤ BY</p>

                    <div className="flex w-full justify-center items-center gap-x-5">

                        <div className="bg-[#585858] h-[1px] w-[50%]"></div>

                        <div className="">
                            <span>C</span>
                            <span className="text-dodgerblue">r</span>
                            <span>x</span>
                        </div>

                        <div className="bg-[#585858] h-[1px] w-[50%]"></div>
                    </div>
                </div>

                <div className=" flex flex-wrap flex-col gap-y-5 sm:flex-row lg:w-[769.46px] lg:h-[194.08px] justify-center mt-6 gap-x-[13rem] pb-5  items-center ">
                    
                <div className="flex flex-col items-center justify-center">
                        <div>
                            <p className="font-semibold text-[#585858]">COMPANY</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p>About Us</p>
                            <p>Team</p>
                            <p>Carrers</p>
                            <p>Blogs</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <p className="font-semibold text-[#585858]">CONTACT</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p>Help & Support</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <p className="font-semibold text-[#585858]">LEGAL</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p>Terms & Conditions</p>
                            <p>Privacy policy</p>
                            <p>Cookie policy</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#585858] h-[1px] w-full"></div>

                <div className="mt-2 ">
                    <p className="text-[#585858] text-center">
                        {" "}
                        Copyright © 2023 - All rights reserved by Coderscruxx{" "}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
