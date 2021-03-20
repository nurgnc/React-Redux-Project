import React from 'react'
import  Slider  from '../Slider'
import { SliderData } from '../SliderData'

function Home() {
    return (
        <div>
            <Slider slides={SliderData}/>
        </div>
    )
}

export default Home
