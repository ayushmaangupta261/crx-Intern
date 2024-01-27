import React from 'react'
import HeroSection from '../Components/HeroSection'
import Tabs from '../Components/Tabs'
import Activity from '../Components/Activity'
import Events from '../Components/Events'
import Questions from '../Components/Questions'

const CollegeProfile = () => {
    return (
        <div className="w-[100vw] h-auto pb-10">

            {/* Hero section */ }
            <div className="w-full  md:mx-auto  ">
                <HeroSection />
            </div>

            {/* Empty div for marging */}
            {/* <div className="w-full h-[1px] bg-[#B5B5B5]"></div> */}

            {/* Tabs section */}
            <div className="w-full  bg-slate-400 ">
                <Tabs />
            </div>

            {/* Empty div for marging */}
            {/* <div className="w-full h-[1px] bg-[#B5B5B5] "></div> */}

            {/* Activity section */}
            <div className="w-full h-auto">
                <Activity />
            </div>

            {/* Empty div for marging*/}
            <div className="w-[90%] h-[1px] bg-[#B5B5B5] mx-auto mt-5 "></div>

            {/* Event section */}
            <div className="w-full h-auto mt-10">
                <Events />
            </div>

            {/* Question section */}
            <div className="w-full h-auto mt-10">
                <Questions />
            </div>


        </div>
    )
}

export default CollegeProfile
