import React from 'react'
import Hackathons from './Events/Hackathons'
import Quizs from './Events/Quizs'

const Events = () => {
    return (
        <div className="w-full h-auto lg:ml-[4rem] flex flex-col min-md:justify-center min-md:items-center gap-y-10">

            <Hackathons />

            <Quizs />

        </div>
    )
}

export default Events
