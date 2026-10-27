import React from 'react'
import { useState } from 'react';
import { WeatherModal } from '../Modals/WeatherModal';
export const Hero = () => {
    const [click, setClick] = useState(false);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <div className="text-center">
                <h1 className="text-6xl text-blue-300 font-extrabold">NextLevel <span className="text-blue-400">Weather</span></h1>
                <p className="py-4 text-md text-gray-400">Check your weather today in next level</p>
            </div>
            <div >
                <button class="btn btn-primary" onClick={() => setClick(true)}>Check Weather</button>
            </div>
            {click && <WeatherModal onClose={() => setClick(false)} />}
        </div>
    )
}
