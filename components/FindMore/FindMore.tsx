import React from 'react'
import Find from './Find'


function FindMore() {

  return (
    <div className='w-[1200px] mx-auto pt-[200px] pb-[138px] flex items-center justify-between'>
        <Find img={"/FlowerImg1.png"} title={"Summer cactus & succulents"}/>
        <Find img={"/FlowerImg2.png"} title={"Styling Trends & much more"}/>
    </div>
  )
}

export default FindMore