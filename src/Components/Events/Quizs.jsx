import React from 'react'
import Quizz from "../../assests/Activity/Quizz.png"
import Text from '../Text/Text'
import QuizCard from './Quiz/QuizCard'

const Quizs = () => {
  return (
    <div className="flex flex-col  max-[1024px]:justify-center max-[1024px]:items-center  ">

      <div className="">
        <Text width={"170px"} height={"27px"} weight={"700"} size={"22px"} txtheight={"26.63"} color={"black"} data={"On-going Quizz"} />
      </div>

      {/* cards */}
      <div className="flex flex-col md:flex-row flex-wrap max-[1024px]:gap-y-7 gap-x-5 mt-5  max-[1024px]:justify-center max-[1024px]:items-center" >

        {/* Card 1 */}
        <QuizCard height={"280px"} width={"297px"} image={Quizz} data={"Aptitude Quiz to check your knowledge"} date={"MON 12:00 Pm"} btnTextColor={"white"} btnBg={"#068FFF"} btnData={"Play"} />


        {/* Card 2 */}
        <QuizCard height={"280px"} width={"297px"} image={Quizz} data={"Aptitude Quiz to check your knowledge"} date={"MON 12:00 Pm"} btnTextColor={"white"} btnBg={"#068FFF"} btnData={"Play"} />


        {/* Card 3 */}
        <QuizCard height={"280px"} width={"297px"} image={Quizz} data={"Aptitude Quiz to check your knowledge"} date={"MON 12:00 Pm"} btnTextColor={"white"} btnBg={"#068FFF"} btnData={"Play"} />




      </div>


    </div>
  )
}

export default Quizs
